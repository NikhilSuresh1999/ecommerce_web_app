package com.nikhil.service;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Cart;
import com.nikhil.model.User;
import com.nikhil.request.AddItemRequest;

public interface CartService {
	
	
	public Cart createcart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req)throws ProductException;
	
	public Cart findUserCart(Long userId);
	
	

}
