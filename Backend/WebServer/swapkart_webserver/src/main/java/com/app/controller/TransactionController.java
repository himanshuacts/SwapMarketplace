package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Transaction;
import com.app.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
	@Autowired
	private TransactionService transactionService;

	@GetMapping("/{userId}")
	public ResponseEntity<List<Transaction>> getTransactionByUserIdAndOwnerProductId(@PathVariable Integer userId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(transactionService.getAllTransactionsForUser(userId));
	}
}
