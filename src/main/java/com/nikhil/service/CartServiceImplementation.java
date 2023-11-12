package com.nikhil.service;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Cart;
import com.nikhil.model.CartItem;
import com.nikhil.model.Product;
import com.nikhil.model.User;
import com.nikhil.repository.CartRepository;
import com.nikhil.request.AddItemRequest;

@Service
public class CartServiceImplementation implements CartService {

	
	private CartRepository cartRepository;
	private CartItemService cartItemService;
	private ProductService productService;
	
	public CartServiceImplementation(CartRepository cartRepository,
			CartItemService cartItemService,ProductService productService)
	
	{
		
		this.cartRepository=cartRepository;
		this.cartItemService= cartItemService;
		this.productService=productService;
		
		
	}
	
	
	@Override
	public Cart createcart(User user) {
		
		
		
		Cart cart=new Cart();
		cart.setUser(user);
		
		return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		
		Cart cart=cartRepository.findByUserId(userId);
		
		Product product=productService.findProductById(req.getProductId());
		CartItem isPresent=cartItemService.isCartItemExist(cart, product, req.getSize(), userId);
		
		if(isPresent==null)
		{
			CartItem cartItem=new CartItem();
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItem.setQuantity(req.getQuantity());
			cartItem.setUserId(userId);
			
			int price = req.getQuantity()*product.getDiscountPrice();
			cartItem.setPrice(price);
			cartItem.setSize(req.getSize());
			
			CartItem createdCartItem=cartItemService.createcartItem(cartItem);
			cart.getCartItems().add(createdCartItem);
			
		}
		
		return "item Add to Cart";
	}

	@Override
	public Cart findUserCart(Long userId) {
		
		Cart cart=cartRepository.findByUserId(userId);
		
		int totalPrice=0;
		int totalDiscountedPrice=0;
		int totalItem=0;
		
		
		
		
		for(CartItem cartItem:cart.getCartItems())
		{
			totalPrice=totalPrice+cartItem.getPrice();
			totalDiscountedPrice=totalDiscountedPrice+cartItem.getDiscountedPrice();
			totalItem=totalItem+cartItem.getQuantity();
		}
		
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cart.setTotalPrice(totalPrice);
		cart.setDiscount(totalPrice-totalDiscountedPrice);
		
		
		return cartRepository.save(cart);
	}

}
