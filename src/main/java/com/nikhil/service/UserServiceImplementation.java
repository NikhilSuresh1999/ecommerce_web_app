package com.nikhil.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nikhil.Exception.UserException;
import com.nikhil.config.JwtProvider;
import com.nikhil.model.User;
import com.nikhil.repository.UserRepository;


@Service
public class UserServiceImplementation implements UserService {
	
	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	
	public UserServiceImplementation(UserRepository userRepository,JwtProvider jwtProvider)
	{
		this.userRepository=userRepository;
		this.jwtProvider=jwtProvider;
	}

	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User>user=userRepository.findById(userId);
		if(user.isPresent())
		{
			return user.get();
		}
		
		throw new UserException("User not found with id "+userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email=jwtProvider.getEmailFromToken(jwt);
		
		User user=userRepository.findByEmail(email);
		if(user==null)
		{
			throw new UserException("user not found with email "+email);
		}
		
		
		return user;
	}
	
	
	@Override
	public User updateUser(Long userId, User req) throws UserException {
		User user=findUserById(userId);
		
		if(req.getFirstName()!=null)
		{
			user.setFirstName(req.getFirstName());
		}
		
		if(req.getLastName()!=null)
		{
			user.setLastName(req.getLastName());
		}
		
		if(req.getEmail()!=null)
		{
			user.setEmail(req.getEmail());
		}
		
		if(req.getMobile()!=null)
		{
			user.setMobile(req.getMobile());
		}
		
		
		return userRepository.save(user);
	}

}
