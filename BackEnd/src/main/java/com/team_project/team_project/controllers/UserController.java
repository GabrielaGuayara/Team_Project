package com.team_project.team_project.controllers;

import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Autowire the PasswordEncoder bean

    @GetMapping("")
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Integer userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @PostMapping("")
    public String handleFormSubmission(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value = "isVolunteer", defaultValue = "false") boolean isVolunteer,
            @RequestParam(value = "interests", defaultValue = "") String interests,
            @RequestParam(value = "sessionIds", defaultValue = "") String sessionIds) {

        // Encrypt the password using the PasswordEncoder bean
        String encryptedPassword = passwordEncoder.encode(password);

        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(encryptedPassword); // Use encrypted password
        user.setIsVolunteer(isVolunteer);
        user.setInterests(List.of(interests.split(",")).stream().map(String::trim).collect(Collectors.toList()));
        user.setSessionIds(List.of(sessionIds.split(",")).stream().map(String::trim).collect(Collectors.toList()));

        userRepository.save(user);

        // Return back to the users
        return "redirect:/api/users";
    }
}


