package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Integer productId;
	
	@Column(name = "product_name", columnDefinition = "VARCHAR(20)")
	private String productName;
	
	@Column(name = "product_description", columnDefinition = "VARCHAR(150)")
	private String productDescription;
	
	@Column(name = "product_brand", columnDefinition = "VARCHAR(50)")
	private String productBrand;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "first_image", columnDefinition = "BLOB")
	private byte[] firstImage;
	
	@Column(name = "second_image", columnDefinition = "BLOB")
	private byte[] secondImage;
	
	@Column(name = "third_image", columnDefinition = "BLOB")
	private byte[] thirdImage;
	
	@Column(name = "posted_date", columnDefinition = "DATE")
	private LocalDate postedDate;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category; // Assuming Category object
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user; // Assuming User object
}
