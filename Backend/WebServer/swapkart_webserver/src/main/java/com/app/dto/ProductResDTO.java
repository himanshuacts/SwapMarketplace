package com.app.dto;

import java.time.LocalDate;
import java.util.Base64;

import com.app.entities.Category;
import com.app.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductResDTO {
	private Integer productId;
	private String productName;
	private String productDescription;
	private String productBrand;
	private int price;
	private byte[] firstImage;
	private byte[] secondImage;
	private byte[] thirdImage;
	private LocalDate postedDate;
	private int categoryId;
	private UserResDTO user;
	
	public byte[] decodeFirstImage() {
		if (firstImage != null) {
			return Base64.getDecoder().decode(firstImage);
		}
		return null;
	}
	
	public byte[] decodeSecondImage() {
		if (secondImage != null) {
			return Base64.getDecoder().decode(secondImage);
		}
		return null;
	}
	
	public byte[] decodeThirdImage() {
		if (thirdImage != null) {
			return Base64.getDecoder().decode(thirdImage);
		}
		return null;
	}
}
