package com.app.dto;

import java.util.Base64;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthRespDTO {
    private String firstName;
    private String lastName;
    private String emailId;
    private Long mobile;
    private byte[] image;
    private String cityName; 

    public byte[] decodeUserImage() {
        if (image != null) {
            return Base64.getDecoder().decode(image);
        }
        return null;
    }
}

