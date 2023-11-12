package com.nikhil.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nikhil.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long>{

	
	
	
}
