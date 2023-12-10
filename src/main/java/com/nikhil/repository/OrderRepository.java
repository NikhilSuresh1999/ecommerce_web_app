package com.nikhil.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.nikhil.model.Orders;

public interface OrderRepository extends JpaRepository<Orders,Long>{
	
	
	@Query("SELECT o FROM Orders o WHERE o.user.id = :userId AND (o.orderStatus = 'PLACED' OR o.orderStatus = 'CONFIRMED' OR o.orderStatus = 'SHIPPED' OR o.orderStatus = 'DELIVERED')")
	public List<Orders> getUserOrders(@Param("userId") Long userId);


}
