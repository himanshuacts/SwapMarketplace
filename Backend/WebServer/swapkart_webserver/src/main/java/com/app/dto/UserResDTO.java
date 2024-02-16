package com.app.dto;

import java.util.Base64;

import com.app.entities.City;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResDTO {
	 private Integer userId;
     private String firstName;
     private Integer rating;
     private byte[] userImage;
     private String city;
     

     
     public byte[] decodeUserImage() {
 		if (userImage != null) {
 			return Base64.getDecoder().decode(userImage);
 		}
 		return null;
 	}
}
