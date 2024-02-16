package com.app.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.ApiResponse;
import com.app.dto.ProductReqDTO;
import com.app.dto.ProductResDTO;
import com.app.dto.UserResDTO;
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
	public List<Product> getProductsByUserId(Integer userId) {
		return productRepository.findByUser(userId);
	}

	@Override
	public Product getProductById(Integer productId) {
		return productRepository.findById(productId)
				.orElseThrow(() -> new EntityNotFoundException("Product not found with ID: " + productId));
	}

	@Override
	public Product saveProduct(String productJson, MultipartFile firstImage, MultipartFile secondImage,
			MultipartFile thirdImage) {
		try {
			ProductReqDTO productReqDTO = objectMapper.readValue(productJson, ProductReqDTO.class);
			Category category = categoryRepository.findById(productReqDTO.getCategoryId()).orElseThrow(
					() -> new EntityNotFoundException("Category not found with ID: " + productReqDTO.getCategoryId()));
			User user = userRepository.findById(productReqDTO.getUserId()).orElseThrow(
					() -> new EntityNotFoundException("User not found with ID: " + productReqDTO.getUserId()));
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
	public Product updateProduct(Integer productId, String productJson, MultipartFile firstImage,
			MultipartFile secondImage, MultipartFile thirdImage) {
		try {
			ProductReqDTO productReqDTO = objectMapper.readValue(productJson, ProductReqDTO.class);
			Category category = categoryRepository.findById(productReqDTO.getCategoryId()).orElseThrow(
					() -> new EntityNotFoundException("Category not found with ID: " + productReqDTO.getCategoryId()));
			User user = userRepository.findById(productReqDTO.getUserId()).orElseThrow(
					() -> new EntityNotFoundException("User not found with ID: " + productReqDTO.getUserId()));
			Product existingProduct = productRepository.findById(productId)
					.orElseThrow(() -> new EntityNotFoundException("Product not found with ID: " + productId));
			existingProduct.setProductName(productReqDTO.getProductName());
			existingProduct.setProductDescription(productReqDTO.getProductDescription());
			existingProduct.setProductBrand(productReqDTO.getProductBrand());
			existingProduct.setPrice(productReqDTO.getPrice());
			existingProduct.setFirstImage(firstImage.getBytes());
			existingProduct.setSecondImage(secondImage.getBytes());
			existingProduct.setThirdImage(thirdImage.getBytes());
			existingProduct.setPostedDate(productReqDTO.getPostedDate());
			existingProduct.setCategory(category);
			existingProduct.setUser(user);
			return productRepository.save(existingProduct);
		} catch (IOException e) {
			throw new RuntimeException("Error processing user data", e);
		}
	}

	@Override
	public ApiResponse deleteProduct(Integer productId) {
		productRepository.deleteById(productId);
		return new ApiResponse("Product deleted successfully");
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public List<ProductResDTO> getProductResDTOsFromDatabase(ProductService productService) {
		// TODO Auto-generated method stub
		List<Product> products = productService.getAllProducts(); // Assuming a ProductService exists for retrieving products

	    if (products == null || products.isEmpty()) {
	        return Collections.emptyList(); // Return empty list if no products found
	    }

	    List<ProductResDTO> dtos = new ArrayList<>();
	    for (Product product : products) {
	        dtos.add(createProductResDTO(product));
	    }

	    return dtos;
	}

	@Override
	public ProductResDTO createProductResDTO(Product product) {
		try {
			ProductResDTO dto = new ProductResDTO();
			dto.setProductId(product.getProductId());
	        dto.setProductName(product.getProductName());
	        dto.setProductDescription(product.getProductDescription());
	        dto.setProductBrand(product.getProductBrand());
	        dto.setPrice(product.getPrice());
	        dto.setFirstImage(product.getFirstImage());
	        dto.setSecondImage(product.getSecondImage());
	        dto.setThirdImage(product.getThirdImage());
	        dto.setPostedDate(product.getPostedDate());
	        dto.setCategoryId(product.getUser().getUserId());
	        
	        User user = product.getUser();
	        if (user != null) {
	            dto.setUser(createSimplifiedUserResDTO(user)); // Create a simplified user representation
	        } else {
	            dto.setUser(null); // Set user to null if `product.getUser()` is null
	        }
            
	        return dto;
		}
		
		catch (RuntimeException e) {
			throw new RuntimeException("No product in database",e);
		}
	}
	
	public UserResDTO createSimplifiedUserResDTO(User user) {
	    if (user == null) {
	        return null; // Handle null input
	    }

	    return new UserResDTO(
	        user.getUserId(), // Assume userId is appropriate type
	        user.getFirstName(), // Assume firstName is appropriate type
	        user.getRating(),
	        user.getUserImage(),
	        user.getCity().getCityName()
	        
	    );
	}
}