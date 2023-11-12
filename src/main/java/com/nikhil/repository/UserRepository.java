package com.nikhil.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nikhil.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	public User findByEmail(String email);

}
