package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "transactions")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transaction_id")
	private Integer transactionId;
	
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "user_product_id")
	private Integer userProductId; // Assuming Product object
	
	@Column(name = "owner_id")
	private Integer ownerId;
	
	@Column(name = "owner_product_id")
	private Integer ownerProductId; // Assuming Product object
	
	@Column(name = "status")
	private boolean status;
}
