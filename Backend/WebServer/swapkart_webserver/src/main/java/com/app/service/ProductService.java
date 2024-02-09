package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.entities.Product;

public interface ProductService {
	public List<Product> getAllProducts();
	
}
