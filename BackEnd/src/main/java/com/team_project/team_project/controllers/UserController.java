package com.team_project.team_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

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
            return new ResponseEntity<>(HttpStatus.CONFLICT); // Conflict if user already exists
        }
        user.setPassword(user.getPassword());
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
}
