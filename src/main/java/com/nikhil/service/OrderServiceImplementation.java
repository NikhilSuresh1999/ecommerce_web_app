package com.nikhil.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.OrderException;
import com.nikhil.model.Address;
import com.nikhil.model.Cart;
import com.nikhil.model.CartItem;

import com.nikhil.model.OrderItem;
import com.nikhil.model.Orders;
import com.nikhil.model.User;
import com.nikhil.repository.AddressRepository;
import com.nikhil.repository.CartRepository;
import com.nikhil.repository.OrderItemRepository;
import com.nikhil.repository.OrderRepository;
import com.nikhil.repository.UserRepository;

@Service
public class OrderServiceImplementation  implements OrderService {
	
	private OrderRepository orderRepository;
	private AddressRepository addressRepository;
	private UserRepository userRepository;
	private OrderItemService orderItemService;
	private OrderItemRepository orderItemRepository;
	
	private CartService cartService;
	
	
	public OrderServiceImplementation(OrderRepository orderRepository,
			AddressRepository addressRepository,UserRepository userRepository,
			OrderItemService orderItemService,OrderItemRepository orderItemRepository,
			CartService cartService
			)
	{
		
		this.addressRepository=addressRepository;
		this.cartService=cartService;
		this.orderItemRepository=orderItemRepository;
		this.orderItemService=orderItemService;
		this.orderRepository=orderRepository;
		this.userRepository=userRepository;
		
		
		
	}

	@Override
	public Orders createOrder(User user, Address shippingAddress) {
		shippingAddress.setUser(user);
		Address address=addressRepository.save(shippingAddress);
		user.getAddress().add(address);
		userRepository.save(user);
		
		Cart cart=cartService.findUserCart(user.getId());
		List<OrderItem>orderItems=new ArrayList<>();
		
		for(CartItem item:cart.getCartItems())
		{
			OrderItem orderItem=new OrderItem();
			
			orderItem.setPrice(item.getPrice());
			orderItem.setProduct(item.getProduct());
			orderItem.setQuantity(item.getQuantity());
			orderItem.setSize(item.getSize());
			orderItem.setUserId(item.getUserId());
			orderItem.setDiscountedPrice(item.getDiscountedPrice());
			
			OrderItem createdOrderItem=orderItemRepository.save(orderItem);
			orderItems.add(createdOrderItem);
		}
		
		Orders createdOrder=new Orders();
		createdOrder.setUser(user);
		createdOrder.setOrderItems(orderItems);
		createdOrder.setTotalPrice(cart.getTotalPrice());
		createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
		createdOrder.setTotalItem(cart.getTotalItem());
		createdOrder.setShippingAddress(address);
		createdOrder.setOrderDate(LocalDateTime.now());
		createdOrder.setOrderStatus("PLACED");
		createdOrder.getPaymentDetails().setStatus("PLACED");
		createdOrder.setCreatedAt(LocalDateTime.now());
		
		Orders savedOrder=orderRepository.save(createdOrder);
		
		for(OrderItem item:orderItems)
		{
			item.setOrder(savedOrder);
			orderItemRepository.save(item);
		}
		return savedOrder;
	}

	@Override
	public Orders findOrderById(Long orderId) throws OrderException {
		Optional<Orders>opt=orderRepository.findById(orderId);
		
		if(opt.isPresent())
		{
			return opt.get();
		}
		throw new OrderException("Order not exist with id"+orderId);
	}

	@Override
	public List<Orders> userOrderHistory(Long userId) {
		List<Orders>orders=orderRepository.getUserOrders(userId);
		return orders;
	}

	@Override
	public Orders placedOrder(Long orderId) throws OrderException {
		
		Orders order=findOrderById(orderId);
		order.setOrderStatus("PLACED");
		order.getPaymentDetails().setStatus("COMPLETED");
		
		
		
		return order;
	}

	@Override
	public Orders confirmedOrder(Long orderId) throws OrderException {
		Orders order=findOrderById(orderId);
		order.setOrderStatus("CONFIRMED");
		return orderRepository.save(order);
	}

	@Override
	public Orders shippedOrder(Long orderId) throws OrderException {
		Orders order=findOrderById(orderId);
		order.setOrderStatus("SHIPPED");
		return orderRepository.save(order);
		
	}

	@Override
	public Orders deliveredOrder(Long orderId) throws OrderException {
		Orders order=findOrderById(orderId);
		order.setOrderStatus("DELIVERED");
		return orderRepository.save(order);
		
	}

	@Override
	public Orders calceledOrder(Long orderId) throws OrderException {
		Orders order=findOrderById(orderId);
		order.setOrderStatus("CANCELLED");
		return orderRepository.save(order);
		
	}

	@Override
	public List<Orders> getAllOrders() {
		return orderRepository.findAll();
		
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		Orders order=findOrderById(orderId);
		orderRepository.deleteById(orderId);
		
	}

}
