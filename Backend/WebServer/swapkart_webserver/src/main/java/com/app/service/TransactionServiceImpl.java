package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TransactionRepository;
import com.app.entities.Transaction;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionRepository transactionRepository;

	@Override
	public Transaction getTransactionByUserIdAndOwnerProductId(Integer userId, Integer ownerProductId) {
		List<Transaction> allCommonTransactions = transactionRepository
				.getAllTransactionsByUserIdAndOwnerProductId(userId, ownerProductId);
		Random random = new Random();
		int randomIndex = random.nextInt(allCommonTransactions.size());
		return allCommonTransactions.get(randomIndex);
	}

	@Override
	public List<Transaction> getAllTransactionsForUser(Integer userId) {
		List<Integer> distinctOwnerProductIds = transactionRepository.findDistinctOwnerProductIdsForUser(userId);
		List<Transaction> userTransactions = new ArrayList<>();
		for (Integer ownerProductId : distinctOwnerProductIds) {
			userTransactions.add(getTransactionByUserIdAndOwnerProductId(userId, ownerProductId));
		}
		return userTransactions;
	}

}
