package com.app.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ProductRepository;
import com.app.dao.TransactionHistoryRepository;
import com.app.dao.TransactionRepository;
import com.app.dao.UserRepository;
import com.app.dto.SwapReqDTO;
import com.app.entities.Product;
import com.app.entities.Transaction;
import com.app.entities.TransactionHistory;

@Service
public class SwapServiceImpl implements SwapService {

	@Autowired
	private TransactionRepository transactionRepository;

	@Autowired
	private TransactionHistoryRepository transactionHistoryRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public Transaction initiateSwap(Integer userId, SwapReqDTO swapRequest) {
		// Validate user and product existence
		userRepository.findById(userId)
				.orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));

		Product userProduct = productRepository.findById(swapRequest.getUserProductId()).orElseThrow(
				() -> new EntityNotFoundException("User product not found with ID: " + swapRequest.getUserProductId()));

		Product ownerProduct = productRepository.findById(swapRequest.getOwnerProductId())
				.orElseThrow(() -> new EntityNotFoundException(
						"Owner product not found with ID: " + swapRequest.getOwnerProductId()));

		// Create a new transaction entry
		Transaction transaction = new Transaction();
		transaction.setUserId(userId);											
		transaction.setUserProductId(userProduct.getProductId());
		transaction.setOwnerId(ownerProduct.getUser().getUserId());
		transaction.setOwnerProductId(ownerProduct.getProductId());
		transaction.setStatus(false); // Swap not completed yet

		// Save the transaction
		transaction = transactionRepository.save(transaction);

		return transaction;
	}

	@Override
	@Transactional
	public void completeSwap(Integer transactionId) {
		// Fetch the transaction
		Transaction transaction = transactionRepository.findById(transactionId)
				.orElseThrow(() -> new EntityNotFoundException("Transaction not found with ID: " + transactionId));

		// Create a new entry in the transaction history
		TransactionHistory transactionHistory = new TransactionHistory();
		transactionHistory.setTransactionId(transaction.getTransactionId());
		transactionHistory.setUserId(transaction.getUserId());
		transactionHistory.setUserProductId(transaction.getUserProductId());
		transactionHistory.setOwnerId(transaction.getOwnerId());
		transactionHistory.setOwnerProductId(transaction.getOwnerProductId());

		// Save the transaction history
		transactionHistoryRepository.save(transactionHistory);

		//Delete the transaction from the transaction table
		transactionRepository.deleteByUserIdAndProductId(transaction.getUserId(), transaction.getOwnerProductId());
		productRepository.deleteById(transactionHistory.getUserProductId());
		productRepository.deleteById(transactionHistory.getOwnerProductId());
	}
}
