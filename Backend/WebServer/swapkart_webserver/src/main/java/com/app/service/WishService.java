package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.AddWishReqDTO;
import com.app.entities.Wish;

@Service
public interface WishService {

	List<Wish> getAllWishes(Integer userID);

	Wish addNewWish(AddWishReqDTO addWishReqDTO);

	void deleteAllWishes(Integer userID);

	void deleteWish(Integer wishId);

}
