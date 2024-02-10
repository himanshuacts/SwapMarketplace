package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Wish;

@Repository
public interface WishRepository extends JpaRepository<Wish, Integer> {

	List<Wish> findByUserId(Integer userId);

	void deleteAllByUserId(Integer userID);

}
