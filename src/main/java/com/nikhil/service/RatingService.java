package com.nikhil.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Rating;
import com.nikhil.model.User;
import com.nikhil.request.RatingRequest;

@Service
public interface RatingService  {
	
	public Rating createRating(RatingRequest req,User user)throws ProductException;
	
	public List<Rating>getProductsRating(Long productId);
	
	
	

}
