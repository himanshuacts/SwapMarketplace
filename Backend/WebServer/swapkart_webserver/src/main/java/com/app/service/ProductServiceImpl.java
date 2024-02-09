package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.entities.Product;

@Service
public class ProductServiceImpl implements ProductService {

	private final ProductRepository productRepository;

	public ProductServiceImpl(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public List<Product> getProductsByUserId(Integer uid) {
		return productRepository.findByUser(uid);
	}

	@Override
	public Optional<Product> getProductById(Integer id) {
		return productRepository.findById(id);
	}

	@Override
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public void deleteProduct(Integer id) {
		productRepository.deleteById(id);
	}

	@Override
	public void deleteProductForUser(Integer uid) {
		productRepository.deleteProductsForUser(uid);
	}

}
