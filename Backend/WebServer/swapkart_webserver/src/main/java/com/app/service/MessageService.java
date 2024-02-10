package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.MessageReqDTO;
import com.app.dto.MessageRespDTO;

public interface MessageService {
	// method to send message 
	ApiResponse sendMessage(MessageReqDTO messageDto);
	
	// method to retrieve all messages from based on user id and owner id
	List<MessageRespDTO> retrieveAllMessage(Integer userId, Integer ownerId);
}
