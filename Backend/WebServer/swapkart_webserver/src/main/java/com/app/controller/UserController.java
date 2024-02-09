package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.app.dto.AuthReqDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/SwapKart")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "/signup", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ApiResponse> signUp(@RequestPart(value = "userReqDto") String userReqJson,
			@RequestPart(value = "file") MultipartFile file) {

		try {
			if (userService.createUser(userReqJson, file) != null) {
				return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("User created successfully"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to create user"));
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Internal server error"));

	}

	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody @Valid AuthReqDTO request) {
		try {
			return new ResponseEntity<>(userService.signIn(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in controller " + e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}

	}

	@DeleteMapping("user/{userId}")
	public ResponseEntity<?> deleteUserById(@PathVariable Integer userId) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUserById(userId));
	}

	@PutMapping(value = "/edit/{userId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateUser(@PathVariable Integer userId,
			@RequestPart(value = "userReqDto") String userReqJson, @RequestPart(value = "file") MultipartFile file) {
		try {
			if (userService.updateUser(userId, userReqJson, file) != null) {
				return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("User updated successfully"));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to update user"));
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Internal server error"));
	}

}
