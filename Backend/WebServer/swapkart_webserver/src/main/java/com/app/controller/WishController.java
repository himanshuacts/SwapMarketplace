package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddWishDto;
import com.app.entities.Wish;
import com.app.service.WishService;

@RestController
@RequestMapping("/Wishlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WishController {

	@Autowired
	private WishService wishService;

	@PostMapping
	public ResponseEntity<Wish> addWish(@RequestBody AddWishDto addWishDto) {
		System.out.println("in add wish ");
		Wish wish = wishService.addNewWish(addWishDto);
		return new ResponseEntity<>(wish, HttpStatus.CREATED);
	}

	@GetMapping("/{userId}")
	public ResponseEntity<List<Wish>> getAllWishesForUser(@PathVariable Integer userId) {
		List<Wish> wishes = wishService.getAllWishes(userId);
		return new ResponseEntity<>(wishes, HttpStatus.OK);
	}

	@DeleteMapping("/{userId}")
	public void deleteAllWishesForUser(@PathVariable Integer userId) {
		wishService.deleteAllWishes(userId);
	}
	
	@DeleteMapping("/wishes/{wishId}")
	public void deleteWishById(@PathVariable Integer wishId) {
		
		wishService.deleteWish(wishId);
	}
	
}