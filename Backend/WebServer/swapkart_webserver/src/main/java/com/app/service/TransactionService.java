package com.app.service;

import java.util.List;

import com.app.entities.Transaction;

public interface TransactionService {
	Transaction getTransactionByUserIdAndOwnerProductId(Integer userId, Integer ownerProductId);
	
	List<Transaction> getAllTransactionsForUser(Integer userId);
}
