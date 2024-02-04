package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
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
@Table(name = "transaction_history")
public class TransactionHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "transaction_history_id")
	private int transactionHistoryId;
	
	@OneToOne
	@JoinColumn(name = "transaction_id")
	@MapsId("transactionId")
	private Transaction transactionId;
	
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "user_product_id")
	private int userProductId; // Assuming Product object
	
	@Column(name = "owner_id")
	private int ownerId;
	
	@Column(name = "owner_product_id")
	private int ownerProductId; // Assuming Product object
}
