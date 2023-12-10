package com.nikhil.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nikhil.Exception.UserException;
import com.nikhil.model.User;
import com.nikhil.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/profile")
	public ResponseEntity<User>getUserProfileHandler(
			@RequestHeader("Authorization")String jwt)throws UserException
	{
		User user=userService.findUserProfileByJwt(jwt);
		
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
	}
	
	
	@PutMapping("/update")
	public ResponseEntity<User>searchUser(@RequestBody User req,
			@RequestHeader("Authorization")String jwt)
	throws UserException{
		
		User reqUser=userService.findUserProfileByJwt(jwt);
		
	     User user=userService.updateUser(reqUser.getId(), req);
		
		
		
		return new ResponseEntity<User>(user,HttpStatus.CREATED);
	}
	
	

}
