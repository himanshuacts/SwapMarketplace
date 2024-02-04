package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "msg_id")
	private int msgId;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "owner_id")
	private User owner;

	private Product userProduct; // Assuming Product object
	private Product ownerProduct; // Assuming Product object

	@Column(name = "role", columnDefinition = "VARCHAR(20)")
	private String role;

	@Column(name = "message", columnDefinition = "VARCHAR(300)")
	private String message;

	@Column(name = "datetime_stamp", columnDefinition = "DATE")
	private LocalDate dateTimeStamp;
}
