package com.nikhil.service;

import com.nikhil.Exception.CartItemException;
import com.nikhil.Exception.UserException;
import com.nikhil.model.Cart;
import com.nikhil.model.CartItem;
import com.nikhil.model.Product;

public interface CartItemService {
	
	public CartItem createcartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId,Long id,CartItem cartItem)throws CartItemException,UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size,Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId)throws CartItemException,UserException;
	
	public CartItem findcartItemById(Long cartItemId)throws CartItemException;

}
