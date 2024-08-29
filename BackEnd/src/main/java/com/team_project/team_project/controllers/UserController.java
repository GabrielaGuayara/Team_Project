package com.team_project.team_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;

<<<<<<< HEAD
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
=======
>>>>>>> c2ec480de972d7c57674b33c1ee19ff8924042a3
import org.springframework.web.bind.annotation.*;

import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.stream.Collectors;
>>>>>>> c2ec480de972d7c57674b33c1ee19ff8924042a3

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public List<User>findAllUsers() {

        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Integer userId) {

        return userRepository.findById(userId).orElse(null);
    }
<<<<<<< HEAD
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
=======

    @PostMapping("")
    public String handleFormSubmission(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value = "isVolunteer", defaultValue = "false") boolean isVolunteer,
            @RequestParam(value = "interests", defaultValue = "") String interests,
            @RequestParam(value = "sessionIds", defaultValue = "") String sessionIds) {

        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setIsVolunteer(isVolunteer);
        user.setInterests(List.of(interests.split(",")).stream().map(String::trim).collect(Collectors.toList()));
        user.setSessionIds(List.of(sessionIds.split(",")).stream().map(String::trim).collect(Collectors.toList()));

        userRepository.save(user);

        //Return back to the users
        return "redirect:/api/users";
    }

>>>>>>> c2ec480de972d7c57674b33c1ee19ff8924042a3
}



