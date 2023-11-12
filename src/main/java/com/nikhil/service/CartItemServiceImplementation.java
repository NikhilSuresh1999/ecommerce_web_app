package com.nikhil.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.CartItemException;
import com.nikhil.Exception.UserException;
import com.nikhil.model.Cart;
import com.nikhil.model.CartItem;
import com.nikhil.model.Product;
import com.nikhil.model.User;
import com.nikhil.repository.CartItemRepository;
import com.nikhil.repository.CartRepository;


@Service
public class CartItemServiceImplementation implements CartItemService {

	private CartItemRepository cartItemRepository;
	
	private UserService userService;
	private CartRepository cartRepository;
	
	
	public CartItemServiceImplementation(CartItemRepository cartItemRepository,
			UserService userService,CartRepository cartRepository)
	{
		this.cartItemRepository=cartItemRepository;
		this.userService=userService;
		this.cartRepository=cartRepository;
		
	}
	
	
	
	@Override
	public CartItem createcartItem(CartItem cartItem) {
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
		
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountPrice()*cartItem.getQuantity());
		
		CartItem createdCartItem=cartItemRepository.save(cartItem);
		
		
		
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		
		CartItem item=findcartItemById(id);
		User user=userService.findUserById(item.getUserId());
		
		if(user.getId().equals(userId))
		{
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity()*item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountPrice()*item.getQuantity());
		 
			
			
		
		}
		return cartItemRepository.save(item);
		
		
		
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		
		CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;
	
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem=findcartItemById(cartItemId);
		
		User user=userService.findUserById(cartItem.getUserId());
		
		User reqUser=userService.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId()))
		{
			cartItemRepository.deleteById(cartItemId);
		}
		
		else {
			throw new UserException("You Cant remove another users item");
		}
		
	}

	@Override
	public CartItem findcartItemById(Long cartItemId) throws CartItemException {
		
		Optional<CartItem>opt=cartItemRepository.findById(cartItemId);
		
		if(opt.isPresent())
		{
			return opt.get();
		}
		
		throw new CartItemException("cartitem not found with id "+cartItemId);
	
	}

}
