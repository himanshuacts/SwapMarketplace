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
	private String productName;
	private String productDescription;
	private String productBrand;
	private int price;
	private byte[] firstImage;
	private byte[] secondImage;
	private byte[] thirdImage;
	private LocalDate postedDate;
	private Category category;
	private User user;
}
