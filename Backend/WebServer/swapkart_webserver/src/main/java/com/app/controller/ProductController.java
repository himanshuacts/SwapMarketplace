package com.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.ProductService;

@RestController
public class ProductController {
	
	private ProductService productService;

	public ProductController(ProductService productService) {
		super();
		this.productService = productService;
	}
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}
	
	@GetMapping("/products/{uid}") 
	public Product getProductById(@PathVariable Integer uid) {
		return productService.getProductById(uid);
	}
	
	@PostMapping("/products/{uid}")
	public Product createProduct(@RequestBody Product product) {
		return productService.saveProduct(product);
	}
	
	@PutMapping("/products/{uid}/{pid}")
	public Product updateProduct(@PathVariable Integer uid, @PathVariable Integer pid, @RequestBody Product product) {
		Product existingProduct = productService.getProductById(pid);
		existingProduct.setProductId(pid);
		existingProduct.setProductName(product.getProductName());
		existingProduct.setProductDescription(product.getProductDescription());
		existingProduct.setProductBrand(product.getProductBrand());
		existingProduct.setPrice(product.getPrice());
		existingProduct.setFirstImage(product.getFirstImage());
		existingProduct.setSecondImage(product.getSecondImage());
		existingProduct.setThirdImage(product.getThirdImage());
		existingProduct.setPostedDate(product.getPostedDate());
		existingProduct.setCategory(product.getCategory());
		existingProduct.setUser(product.getUser());
		productService.updateProduct(existingProduct);
	}
	
	@DeleteMapping("/products/{uid}/{pid}")
	public void deleteProduct(@PathVariable Integer uid, @PathVariable Integer pid) {
		productService.deleteProductById(pid);
	}
}
