package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.WishRepository;
import com.app.dto.AddWishDto;
import com.app.entities.Wish;
@Service
public class WishServiceImpl implements WishService{
@Autowired
private WishRepository wishRepository;
	
	@Override
	public Wish addNewWish(AddWishDto addWishDto) {
		Wish wish = new Wish();
		wish.setUserId(addWishDto.getUserId());
		wish.setProductId(addWishDto.getProductId());
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
