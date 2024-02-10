package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	private final ProductService productService;

	public ProductController(ProductService productService) {
		super();
		this.productService = productService;
	}

	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> products = productService.getAllProducts();
		return ResponseEntity.ok(products);
	}

	@GetMapping("/{uid}")
	public ResponseEntity<List<Product>> getAllUserProducts(@PathVariable Integer uid) {
		List<Product> products = productService.getProductsByUserId(uid);
		return ResponseEntity.ok(products);
	}

	@GetMapping("/{uid}/{pid}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer uid, @PathVariable Integer pid) {
		Optional<Product> product = productService.getProductById(pid);
		return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
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

	@PutMapping("/{pid}")
	public ResponseEntity<Product> updateProduct(@PathVariable Integer pid, @RequestBody Product product) {
		Product existingProduct = productService.getProductById(pid).get();
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
		return ResponseEntity.status(HttpStatus.OK).body(existingProduct);
	}

	@DeleteMapping("/{uid}")
	public ResponseEntity<Void> deleteAllUserProducts(@PathVariable Integer uid) {
		productService.deleteProductForUser(uid);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping("/{uid}/{pid}")
	public ResponseEntity<Void> deleteProduct(@PathVariable Integer uid, @PathVariable Integer pid) {
		productService.deleteProduct(pid);
		return ResponseEntity.noContent().build();
	}

}
