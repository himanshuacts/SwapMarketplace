package com.app.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.SwapReqDTO;
import com.app.dto.UserReqDTO;
import com.app.entities.User;
import com.app.service.SwapService;

@RestController
@RequestMapping("/SwapKart/swap")
public class SwapController {

	@Autowired
	private SwapService swapService;

	@PostMapping("/initiate/{userId}")
	public ResponseEntity<ApiResponse> initiateSwap(@PathVariable Integer userId, @RequestBody SwapReqDTO swapRequest) {
			if (userId == null) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("User not logged in."));
			}

			try {
				swapService.initiateSwap(userId, swapRequest);
				return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Swap initiated successfully"));
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to initiate swap"));
			}
		
	}

	@PostMapping("/complete")
	public ResponseEntity<ApiResponse> completeSwap(@RequestParam Integer transactionId) {
		try {
			swapService.completeSwap(transactionId);
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Swap completed successfully"));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Unable to complete swap"));
		}
	}
}
