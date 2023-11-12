package com.nikhil.service;

import java.util.List;

import com.nikhil.Exception.OrderException;
import com.nikhil.model.Address;
import com.nikhil.model.Order;
import com.nikhil.model.User;

public interface OrderService {
	
	public Order createOrder(User user,Address shippingAddress);
	
	public Order findOrderById(Long orderId)throws OrderException;
	
	public List<Order> userOrderHistory(Long userId);
	
	public Order placedOrder(Long orderId)throws OrderException;
	
	public Order confirmedOrder(Long orderId)throws OrderException;
	
	public Order shippedOrder(Long orderId)throws OrderException;
	
	public Order deliveredOrder(Long orderId)throws OrderException;
	
	public Order calceledOrder(Long orderId)throws OrderException;
	
	public List<Order>getAllOrders();
	
	public void deleteOrder(Long orderId)throws OrderException;
	
	
	
	
	
	

}
