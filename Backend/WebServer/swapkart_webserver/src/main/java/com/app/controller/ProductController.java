package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.entities.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/{uid}")
	public ResponseEntity<List<Product>> getAllUserProducts(@PathVariable Integer uid) {
		List<Product> products = productService.getProductsByUserId(uid);
		return ResponseEntity.status(HttpStatus.OK).body(products);
	}

	@GetMapping("/{uid}/{pid}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer uid, @PathVariable Integer pid) {
		Product product = productService.getProductById(pid);
		return ResponseEntity.status(HttpStatus.OK).body(product);
	}

	@PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ApiResponse> createProduct(@RequestPart(value = "productReqDTO") String productJson,
			@RequestPart(value = "firstImage") MultipartFile firstImage,
			@RequestPart(value = "secondImage") MultipartFile secondImage,
			@RequestPart(value = "thirdImage") MultipartFile thirdImage) {
		try {
			if (productService.saveProduct(productJson, firstImage, secondImage, thirdImage) != null) {
				return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Product added successfully"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to add product"));
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Internal server error"));
	}

	@PutMapping(value = "/{pid}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<ApiResponse> updateProduct(@PathVariable Integer pid,
			@RequestPart(value = "productReqDTO") String productJson,
			@RequestPart(value = "firstImage") MultipartFile firstImage,
			@RequestPart(value = "secondImage") MultipartFile secondImage,
			@RequestPart(value = "thirdImage") MultipartFile thirdImage) {
		try {
			if (productService.updateProduct(pid, productJson, firstImage, secondImage, thirdImage) != null) {
				return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Product updated successfully"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to update product"));
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Internal server error"));
	}

	@DeleteMapping("/{uid}/{pid}")
	public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Integer uid, @PathVariable Integer pid) {
		return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(pid));
	}

}
