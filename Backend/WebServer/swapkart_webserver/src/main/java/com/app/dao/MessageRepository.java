package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {

}
