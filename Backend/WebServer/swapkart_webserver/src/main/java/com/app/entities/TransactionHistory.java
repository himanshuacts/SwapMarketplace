package com.app.entities;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction_history")
public class TransactionHistory {
	private User user;
	private Product userProduct; // Assuming Product object
	private User owner;
	private Product ownerProduct; // Assuming Product object
}
