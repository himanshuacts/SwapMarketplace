package com.app.service;

import java.io.IOException;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CityRepository;
import com.app.dao.UserRepository;
import com.app.dto.ApiResponse;
import com.app.dto.AuthReqDTO;
import com.app.dto.AuthRespDTO;
import com.app.dto.UserReqDTO;
import com.app.entities.City;
import com.app.entities.User;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CityRepository cityRepository;

	@Autowired
	private ObjectMapper objectMapper;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User createUser(String userReqJson, MultipartFile file) {
		try {
			UserReqDTO userReqDto = objectMapper.readValue(userReqJson, UserReqDTO.class);

			City city = cityRepository.findById(userReqDto.getCityId()).orElseThrow(
					() -> new EntityNotFoundException("City not found with ID: " + userReqDto.getCityId()));

			User user = new User();
			user.setFirstName(userReqDto.getFirstName());
			user.setLastName(userReqDto.getLastName());
			user.setEmailId(userReqDto.getEmailId());
			String encodedPassword = passwordEncoder.encode(userReqDto.getPassword());
		    user.setPassword(encodedPassword);
		    user.setMobile(userReqDto.getMobile());
			user.setCity(city);
			user.setRating(userReqDto.getRating());
			user.setUserImage(file.getBytes());

			return userRepository.save(user);
		} catch (IOException e) {
			throw new RuntimeException("Error processing user data", e);
		}
	}

	@Override
	public AuthRespDTO signIn(AuthReqDTO request) {
		User user = userRepository.findByEmailId(request.getEmail()) // Find by email only
		        .orElseThrow(() -> new ResourceNotFoundException("User not found"));
		// Verify password securely using encoder
	    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
	        throw new ResourceNotFoundException("Invalid user login: Bad credentials"); // Don't specify which credential failed
	    }
		City city = cityRepository.findById(user.getCity().getCityId()).orElseThrow();
		AuthRespDTO dto = new AuthRespDTO();
		dto.setId(user.getUserId());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setEmailId(user.getEmailId());
		dto.setMobile(user.getMobile());
		dto.setImage(user.getUserImage());
		dto.setCityName(city.getCityName());
		return dto;
	}
	
	@Override
	public ApiResponse deleteUserById(Integer userId) {
		productService.deleteAllProducts(userId);
		userRepository.deleteById(userId);
		return new ApiResponse("User deleted successfully");
	}

	@Override
	public User updateUser(Integer userId, String userReqJson, MultipartFile file) {
		try {
			UserReqDTO userReqDto = objectMapper.readValue(userReqJson, UserReqDTO.class);

			City city = cityRepository.findById(userReqDto.getCityId()).orElseThrow(
					() -> new EntityNotFoundException("City not found with ID: " + userReqDto.getCityId()));

			User user = userRepository.findById(userId).orElseThrow(
					() -> new EntityNotFoundException("User not found with ID: " + userId));
			user.setFirstName(userReqDto.getFirstName());
			user.setLastName(userReqDto.getLastName());
			user.setEmailId(userReqDto.getEmailId());
			user.setPassword(userReqDto.getPassword());
			user.setMobile(userReqDto.getMobile());
			user.setCity(city);
			user.setRating(userReqDto.getRating());
			user.setUserImage(file.getBytes());

			return userRepository.save(user);
		} catch (IOException e) {
			throw new RuntimeException("Error processing user data", e);
		}
	}
}
