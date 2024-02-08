package com.app.service;

import java.util.List;

import com.app.entities.Product;

public interface ProductService {
	List<Product> getAllProducts();
	Product saveProduct(Product product);
	Product getProductById(Integer id);
	Product updateProduct(Product product);
	void deleteProductById(Integer id);
}
