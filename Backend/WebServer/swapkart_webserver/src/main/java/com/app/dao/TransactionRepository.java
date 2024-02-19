package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
	@Modifying
	@Query("select t from Transaction t where t.userId = ?1 and t.ownerProductId = ?2")
	List<Transaction> getAllTransactionsByUserIdAndOwnerProductId(Integer userId, Integer ownerProductId);

	@Modifying
	@Query("select distinct t.ownerProductId from Transaction t where t.userId = ?1")
	List<Integer> findDistinctOwnerProductIdsForUser(Integer userId);

	@Modifying
	@Query("delete from Transaction t where t.userId = ?1 and t.ownerProductId = ?2")
	void deleteByUserIdAndProductId(Integer userId, Integer ownerProductId);
}
