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
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "first_name", columnDefinition = "VARCHAR(20)")
	private String firstName;
	
	@Column(name = "last_name", columnDefinition = "VARCHAR(20)")
	private String lastName;
	
	@Column(name = "email_id", columnDefinition = "VARCHAR(50)", unique = true)
	private String emailId;
	
	@Column(name = "password", columnDefinition = "VARCHAR(12)")
	private String password;
	
	@Column(name = "mobile", columnDefinition = "BIGINT")
	private long mobile;
	
	@Column(name = "rating", columnDefinition = "INT")
	private int rating;
	
	@ManyToOne
	@JoinColumn(name = "city_id")
	private City city;
	
	@Column(name = "user_image", columnDefinition = "BLOB")
	private byte[] userImage;
}
