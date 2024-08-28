package com.team_project.team_project.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team_project.team_project.models.ChatMessage;
import com.team_project.team_project.repository.ChatMessageRepository;

import jakarta.transaction.Transactional;

@Service
public class ChatMessageService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    // Gets a conversation from the database between users and sorts them out base
    // on date and time;
    public List<ChatMessage> getConversationByConversationId(String conversationId) {
        List<ChatMessage> messages = chatMessageRepository.findByConversationId(conversationId);
        messages.sort(Comparator.comparing(ChatMessage::getTimestamp));
        System.out.println(conversationId);
        System.out.println(messages);
        return messages;
    }

    @Transactional
    public void saveMessage(ChatMessage message) {
        try {
            String conversationId = generateConversationId(
                    Integer.parseInt(message.getSender()),
                    Integer.parseInt(message.getRecipient()));
            message.setConversationId(conversationId);
            chatMessageRepository.save(message);
        } catch (Exception e) {
            System.err.println("error " + e.getMessage());
            e.printStackTrace();
        }
    }

    // Generates a conversation id that uses the senders and receivers id in
    // conjunction
    // So a user with an id of 1 and a user with an id of 2 would be -> 1-2 -> this
    // 1-2 value would then be added to stomp.js to create a one to one
    // communication between the two users
    public String generateConversationId(Integer userId1, Integer userId2) {
        List<Integer> userIds = new ArrayList<>(List.of(userId1, userId2));
        userIds.sort(Integer::compareTo);
        return String.join("-", userIds.stream().map(String::valueOf).toArray(String[]::new));
    }

}
