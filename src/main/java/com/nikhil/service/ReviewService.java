package com.nikhil.service;

import java.util.List;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Review;
import com.nikhil.model.User;
import com.nikhil.request.ReviewRequest;

public interface ReviewService {
	
	public Review createReview(ReviewRequest req,User user)throws ProductException;
	
	public List<Review>getAllReview(Long productId);
	

}
