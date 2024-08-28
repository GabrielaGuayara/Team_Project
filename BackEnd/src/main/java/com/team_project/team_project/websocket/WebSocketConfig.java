package com.team_project.team_project.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // The .setAllowedOriginPatterns("*") is a risk because its allowing ANYONE to
    // make an
    // api call to our server using the route "/chatroom" if we want to limit it to
    // just one specific frontend
    // then we'll have to change it to a specific url but this would have to be
    // changed once we deploy our frontend, ideally it would look something similar
    // but not exactly like this .setAllowedOriginPatterns("http://localhost:8080/")
    // for now, testing wise, it makes sense to add it here
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chatroom")
                .setAllowedOriginPatterns("*")
                .withSockJS();
    }

    // "/topic" and "/user " are for Stomp.js to subscribe to
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic", "/user");
        registry.setApplicationDestinationPrefixes("/app");
    }

}