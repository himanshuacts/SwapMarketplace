package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.entities.Product;

public interface ProductService {
	List<Product> getAllProducts();

	List<Product> getProductsByUserId(Integer uid);

	Optional<Product> getProductById(Integer id);

	Product saveProduct(Product product);

	Product updateProduct(Product product);

	void deleteProduct(Integer id);

	void deleteProductForUser(Integer uid);
}
