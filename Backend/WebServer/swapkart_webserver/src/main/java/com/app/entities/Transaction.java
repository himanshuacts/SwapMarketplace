package com.app.entities;

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
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transactions")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transaction_id")
	private Integer transactionId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "user_product_id")
	private Product userProduct; // Assuming Product object
	
	@ManyToOne
	@JoinColumn(name = "owner_id")
	private User owner;
	
	@ManyToOne
	@JoinColumn(name = "owner_product_id")
	private Product ownerProduct; // Assuming Product object
	
	@Column(name = "status")
	private boolean status;
}
