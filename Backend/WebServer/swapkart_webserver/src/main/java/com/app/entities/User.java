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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;

	@Column(name = "first_name", columnDefinition = "varchar(20)")
	private String firstName;

	@Column(name = "last_name", columnDefinition = "varchar(20)")
	private String lastName;

	@Column(name = "email_id", columnDefinition = "varchar(50)", unique = true)
	private String emailId;

	@Column(name = "password", columnDefinition = "varchar(255)")
	private String password;

	@Column(name = "mobile", columnDefinition = "bigint")
	private long mobile;

	@Column(name = "rating", columnDefinition = "int")
	private int rating;

	@ManyToOne
	@JoinColumn(name = "city_id")
	private City city;

	@Column(name = "user_image", columnDefinition = "LONGBLOB")
	private byte[] userImage;
}
