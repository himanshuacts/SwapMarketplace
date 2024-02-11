package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MessageRepository;
import com.app.dao.UserRepository;
import com.app.dto.ApiResponse;
import com.app.dto.MessageReqDTO;
import com.app.dto.MessageRespDTO;
import com.app.entities.Message;
import com.app.entities.User;

@Service
@Transactional
public class MessageServiceImple implements MessageService {
	@Autowired
	private MessageRepository messageRepo;

	@Autowired
	private UserRepository userRepo;

	@Override
	public ApiResponse sendMessage(MessageReqDTO messageDto) {
		Message msg = new Message();
		User user = userRepo.findById(messageDto.getUserId())
				.orElseThrow(() -> new EntityNotFoundException("user not found"));
		User owner = userRepo.findById(messageDto.getOwnerId())
				.orElseThrow(() -> new EntityNotFoundException("owner not found"));
		msg.setUser(user);
		msg.setOwner(owner);
		msg.setDateTimeStamp(LocalDateTime.now());
		msg.setMessage(messageDto.getMessage());
		if (messageRepo.save(msg) != null) {
			return new ApiResponse("message sent successfully!!!");
		}
		return new ApiResponse("unable to sent message :(");
	}

	@Override
	public List<MessageRespDTO> retrieveAllMessage(Integer userId, Integer ownerId) {
		List<Message> messages = messageRepo.findByUserUserIdAndOwnerUserId(userId, ownerId);
		return messages.stream().map(this::convertToDTO).collect(Collectors.toList());
	}

	private MessageRespDTO convertToDTO(Message message) {
		return new MessageRespDTO(message.getMessage(), message.getUser().getUserId(), message.getOwner().getUserId(),
				message.getDateTimeStamp());
	}

}
