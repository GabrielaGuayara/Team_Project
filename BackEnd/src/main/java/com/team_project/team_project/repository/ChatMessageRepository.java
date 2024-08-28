package com.team_project.team_project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team_project.team_project.models.ChatMessage;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Integer> {
    List<ChatMessage> findByConversationId(String conversationId);
}
