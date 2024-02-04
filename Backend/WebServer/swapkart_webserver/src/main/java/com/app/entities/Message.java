package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "chatbox")
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "msg_id")
	private int msgId;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToOne
	@JoinColumn(name = "owner_id")
	private User owner;

	@Column(name = "user_product_id")
	private int userProductId;
	
	@Column(name = "owner_product_id")
	private int ownerProductId;

	@Column(name = "role", columnDefinition = "VARCHAR(20)")
	private String role;

	@Column(name = "message", columnDefinition = "VARCHAR(300)")
	private String message;

	@Column(name = "datetime_stamp", columnDefinition = "DATE")
	private LocalDate dateTimeStamp;
}
