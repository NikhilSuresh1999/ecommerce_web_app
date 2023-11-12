package com.nikhil.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nikhil.model.Address;

public interface AddressRepository extends JpaRepository<Address,Long> {

}
