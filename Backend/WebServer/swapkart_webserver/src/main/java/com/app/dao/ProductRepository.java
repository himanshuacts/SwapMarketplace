package com.app.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	@Modifying
	@Query("select p from Product p where p.user.userId = ?1")
	List<Product> findByUser(Integer userId);
	
	@Modifying
	@Transactional
	@Query("delete from Product p where p.user.userId = ?1")
	void deleteAllProducts(Integer userId) ;
}
