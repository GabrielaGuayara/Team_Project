package com.team_project.team_project.controllers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.team_project.team_project.models.ChatMessage;
import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;
import com.team_project.team_project.service.ChatMessageService;

@RestController
@RequestMapping("/api/messages")
public class ChatController {

    private final SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ChatMessageService chatMessageService;

    @Autowired
    public ChatController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    // Generates a conversation id using the senders and recipients id to also be
    // able to get that specific conversation history by id
    @GetMapping("/history")
    public List<ChatMessage> getChatHistory(@RequestParam Integer sender, @RequestParam Integer recipient) {
        String conversationId = chatMessageService.generateConversationId(sender, recipient);
        return chatMessageService.getConversationByConversationId(conversationId);
    }

    // The message mapping is confusing because we have register but we're not
    // actually registering a new user, we're simply registering a session
    // id
    @MessageMapping("/register")
    public void registerUser(@Payload ChatMessage message, StompHeaderAccessor headerAccessor) {
        Integer userId = Integer.parseInt(message.getSender());
        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // get the session id through the header using stomp.js
            String sessionId = headerAccessor.getSessionId();
            // if the user sessions id in the table is empty make a new one
            if (user.getSessionIds() == null) {
                user.setSessionIds(new ArrayList<>());
            }
            // if the user sessions id IS NOT in the table then add it and savev it, it may
            // look like we're saving a new user but we're actually updating the users
            // session id and saving it
            if (!user.getSessionIds().contains(sessionId)) {
                user.getSessionIds().add(sessionId);
                userRepository.save(user);
                System.out.println("session id " + sessionId + " user id" + userId);
            }
        } else {
            System.out.println("user not found with " + userId);
        }
    }

    @MessageMapping("/sendMessage")
    public void sendMessage(@Payload ChatMessage message, SimpMessageHeaderAccessor headerAccessor) {
        message.setTimestamp(LocalDateTime.now());

        chatMessageService.saveMessage(message);

        String sessionId = headerAccessor.getSessionId();

        simpMessagingTemplate.convertAndSendToUser(sessionId, "/queue/messages", message);

        Integer senderId = Integer.parseInt(message.getSender());
        Integer recipientId = Integer.parseInt(message.getRecipient());
        String conversationId = chatMessageService.generateConversationId(senderId, recipientId);
        simpMessagingTemplate.convertAndSend("/topic/conversation/" + conversationId, message);
    }

}
