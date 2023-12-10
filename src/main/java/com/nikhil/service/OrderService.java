package com.nikhil.service;

import java.util.List;

import com.nikhil.Exception.OrderException;
import com.nikhil.model.Address;

import com.nikhil.model.Orders;
import com.nikhil.model.User;

public interface OrderService {
	
	public Orders createOrder(User user,Address shippingAddress);
	
	public Orders findOrderById(Long orderId)throws OrderException;
	
	public List<Orders> userOrderHistory(Long userId);
	
	public Orders placedOrder(Long orderId)throws OrderException;
	
	public Orders confirmedOrder(Long orderId)throws OrderException;
	
	public Orders shippedOrder(Long orderId)throws OrderException;
	
	public Orders deliveredOrder(Long orderId)throws OrderException;
	
	public Orders calceledOrder(Long orderId)throws OrderException;
	
	public List<Orders>getAllOrders();
	
	public void deleteOrder(Long orderId)throws OrderException;
	
	
	
	
	
	

}
