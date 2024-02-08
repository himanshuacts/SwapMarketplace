package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AuthReqDTO;
import com.app.dto.AuthRespDTO;
import com.app.entities.User;

public interface UserService {
    User createUser(String userReqJson, MultipartFile file);

    AuthRespDTO signIn(AuthReqDTO request);
}

