package com.nikhil.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.ProductException;
import com.nikhil.model.Product;
import com.nikhil.model.Review;
import com.nikhil.model.User;
import com.nikhil.repository.ProductRepository;
import com.nikhil.repository.ReviewRepository;
import com.nikhil.request.ReviewRequest;

@Service
public class ReviewServiceImplementation implements ReviewService{

	private ReviewRepository reviewRepository;
	private ProductService productService;
	private ProductRepository productRepository;
	
	
	public ReviewServiceImplementation(ReviewRepository reviewRepository,
			ProductService productService,ProductRepository productRepository)
	{
		this.productRepository=productRepository;
		this.productService=productService;
		this.reviewRepository=reviewRepository;
		
		
	}
	
	
	
	
	
	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductid());
		Review review=new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
		// TODO Auto-generated method stub
		return reviewRepository.getAllProductsReview(productId);
	}

}
