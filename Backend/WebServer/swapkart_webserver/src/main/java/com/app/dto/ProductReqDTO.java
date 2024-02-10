package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ProductReqDTO {
    private String productName;
    private String productDescription;
    private String productBrand;
    private int price;
    private LocalDate postedDate;
    private int categoryId;
    private int userId;
    
    @JsonCreator
    public ProductReqDTO(
            @JsonProperty("productName") String productName,
            @JsonProperty("productDescription") String productDescription,
            @JsonProperty("productBrand") String productBrand,
            @JsonProperty("price") int price,
            @JsonProperty("postedDate") LocalDate postedDate,
            @JsonProperty("category") int category,
            @JsonProperty("user") int user) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productBrand = productBrand;
        this.price = price;
        this.postedDate = postedDate;
        this.categoryId = category;
        this.userId = user;
    }
}
