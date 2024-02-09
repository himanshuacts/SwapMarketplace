package com.app.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserReqDTO {
	private String firstName;
	private String lastName;
	private String emailId;
	private String password;
	private Long mobile;
	private int rating;
	private int cityId;

	@JsonCreator
	public UserReqDTO(@JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName,
			@JsonProperty("emailId") String emailId, @JsonProperty("password") String password,
			@JsonProperty("mobile") Long mobile, @JsonProperty("rating") Integer rating,
			@JsonProperty("cityId") Integer cityId) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.mobile = mobile;
		this.rating = rating;
		this.cityId = cityId;
	}
}
