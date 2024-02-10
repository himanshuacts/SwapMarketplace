package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.MessageReqDTO;
import com.app.dto.MessageRespDTO;
import com.app.service.MessageService;

@RestController
@RequestMapping("/chat")
public class MessageController {
	@Autowired
	private MessageService messageService;

	@PostMapping("/new-message")
	public ResponseEntity<ApiResponse> sendMessage(@RequestBody MessageReqDTO messageDto) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(messageService.sendMessage(messageDto));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("unable to send message"));
		}
	}
	
	@GetMapping("/new-message/{userId}/{ownerId}")
	public List<MessageRespDTO> retrieveMessage(@PathVariable Integer userId, @PathVariable Integer ownerId){
		return messageService.retrieveAllMessage(userId, ownerId);
	}
	
}
