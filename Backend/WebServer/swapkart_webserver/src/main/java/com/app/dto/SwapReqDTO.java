package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SwapReqDTO {
	private Integer userProductId; // Product ID selected by the user for swap
	private Integer ownerProductId; // Product ID of the owner's product
}
