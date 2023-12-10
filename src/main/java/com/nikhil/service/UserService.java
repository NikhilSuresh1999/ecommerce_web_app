package com.nikhil.service;

import com.nikhil.Exception.UserException;
import com.nikhil.model.User;

public interface UserService {
	
	
	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt)throws UserException;
	
	public User updateUser(Long userId,User user)throws UserException;

}
