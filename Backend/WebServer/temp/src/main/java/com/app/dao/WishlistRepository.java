package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.WishList;

@Repository
public interface WishlistRepository extends JpaRepository<WishList, Integer> {

}
