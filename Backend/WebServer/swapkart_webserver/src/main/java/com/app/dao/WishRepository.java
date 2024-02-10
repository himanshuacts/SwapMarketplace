package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Wish;

@Repository
public interface WishRepository extends JpaRepository<Wish, Integer> {

	List<Wish> findByUserId(Integer userId);

	@Modifying
	@Query("delete from Wish w where w.userId =?1")
	void deleteAllByUserId(Integer userID);

}
