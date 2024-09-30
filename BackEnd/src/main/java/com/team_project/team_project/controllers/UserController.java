package com.team_project.team_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;
import com.team_project.team_project.service.impl.UserServiceImpl;
import com.team_project.team_project.service.interfaces.IUserService;

import java.util.List;

import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IUserService userService;

    @GetMapping("")
    public List<User>findAllUsers() {

        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Integer userId) {

        return userRepository.findById(userId).orElse(null);
    }

    @GetMapping("/")
    public List<User> userList(){
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        if (userRepository.findById(user.getId()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        user.setPassword(user.getPassword());
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }


    @PostMapping("/register")
    public ResponseEntity<Response> registerUser(@RequestBody User user) {
        Response response = userService.register(user);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Response> loginUser(@RequestBody LoginRequest loginRequest) {
        Response response = userService.login(loginRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    



}



