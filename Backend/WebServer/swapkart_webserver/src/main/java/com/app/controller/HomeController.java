package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/")
public class HomeController {
    @Autowired      
	private ProductService productService;
    
    @GetMapping
    public ResponseEntity<List<Product>> findAllProducts() {
    	List<Product> products = productService.getAllProducts();
    	if(products.isEmpty()) {
    		return 	new ResponseEntity<>(HttpStatus.NO_CONTENT);
    	}
    	return new ResponseEntity<>(products, HttpStatus.OK);
    }
	
	

}

