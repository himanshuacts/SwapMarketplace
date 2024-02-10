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

import com.app.dto.AddWishReqDTO;
import com.app.dto.ApiResponse;
import com.app.entities.Wish;
import com.app.service.WishService;

@RestController
@RequestMapping("/Wishlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WishController {

	@Autowired
	private WishService wishService;

	@PostMapping
	public ResponseEntity<Wish> addWish(@RequestBody AddWishReqDTO addWishReqDTO) {
		System.out.println("in add wish ");
		Wish wish = wishService.addNewWish(addWishReqDTO);
		return new ResponseEntity<>(wish, HttpStatus.CREATED);
	}

	@GetMapping("/{userId}")
	public ResponseEntity<List<Wish>> getAllWishesForUser(@PathVariable Integer userId) {
		List<Wish> wishes = wishService.getAllWishes(userId);
		return new ResponseEntity<>(wishes, HttpStatus.OK);
	}

	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteAllWishesForUser(@PathVariable Integer userId) {
		try {
		wishService.deleteAllWishes(userId);
		return new ResponseEntity<>(new ApiResponse("all wishes deleted successfully for user: " + userId),
				HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to delete all wishes!!!"));
	 	}
	}

	@DeleteMapping("/wishes/{wishId}")
	public ResponseEntity<?> deleteWishById(@PathVariable Integer wishId) {
		try {
		wishService.deleteWish(wishId);
		return new ResponseEntity<>(new ApiResponse(" wish deleted successfully for wishId: " + wishId), HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to delete wish!!!"));
		}
	}

}