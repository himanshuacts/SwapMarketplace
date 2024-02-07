package com.app.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wishlist")
public class WishList {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "wishlist_id")
	private int wishlistId;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany
	@JoinColumn(name = "product_id")
	private List<Product> products;
}
