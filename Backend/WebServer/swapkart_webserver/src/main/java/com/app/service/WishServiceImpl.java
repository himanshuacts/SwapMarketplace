package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.WishRepository;
import com.app.dto.AddWishReqDTO;
import com.app.entities.Wish;
@Service
@Transactional
public class WishServiceImpl implements WishService{
@Autowired
private WishRepository wishRepository;
	
	@Override
	public Wish addNewWish(AddWishReqDTO addWishReqDTO) {
		Wish wish = new Wish();
		wish.setUserId(addWishReqDTO.getUserId());
		wish.setProductId(addWishReqDTO.getProductId());
		return wishRepository.save(wish);
	}

	@Override
	public List<Wish> getAllWishes(Integer userID) {
		
		return wishRepository.findByUserId(userID);
	}

	@Override
	public void deleteAllWishes(Integer userID) {
		
		 wishRepository.deleteAllByUserId(userID);
		
	}

	@Override
	public void deleteWish(Integer wishId) {
		
		wishRepository.deleteById(wishId);
	}
	
    
}
