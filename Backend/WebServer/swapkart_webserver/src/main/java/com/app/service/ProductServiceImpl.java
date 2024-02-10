package com.app.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.ProductReqDTO;
import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.User;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ObjectMapper objectMapper;
	

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
	public Product saveProduct(String productJson, MultipartFile firstImage, MultipartFile secondImage, MultipartFile thirdImage) {
		try {
			ProductReqDTO productReqDTO = objectMapper.readValue(productJson, ProductReqDTO.class);
			Category category = categoryRepository.findById(productReqDTO.getCategoryId()).orElseThrow(() -> new EntityNotFoundException("Category not found with ID: " + productReqDTO.getCategoryId()));
			User user = userRepository.findById(productReqDTO.getUserId()).orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + productReqDTO.getUserId()));
			Product newProduct = new Product();
			newProduct.setProductName(productReqDTO.getProductName());
			newProduct.setProductDescription(productReqDTO.getProductDescription());
			newProduct.setProductBrand(productReqDTO.getProductBrand());
			newProduct.setPrice(productReqDTO.getPrice());
			newProduct.setFirstImage(firstImage.getBytes());
			newProduct.setSecondImage(secondImage.getBytes());
			newProduct.setThirdImage(thirdImage.getBytes());
			newProduct.setPostedDate(productReqDTO.getPostedDate());
			newProduct.setCategory(category);
			newProduct.setUser(user);
			return productRepository.save(newProduct);
		} catch (IOException e) {
			throw new RuntimeException("Error processing user data", e);
		}
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