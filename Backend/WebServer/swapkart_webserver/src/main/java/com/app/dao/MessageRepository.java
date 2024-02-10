package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
	@Modifying
	@Query("SELECT m FROM Message m WHERE (m.user.userId = :userId AND m.owner.userId = :ownerId) OR (m.user.userId = :ownerId AND m.owner.userId = :userId)")
	List<Message> findByUserUserIdAndOwnerUserId(@Param("userId") Integer userId, @Param("ownerId") Integer ownerId);
}