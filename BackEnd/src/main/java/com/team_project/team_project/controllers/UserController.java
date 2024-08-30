package com.team_project.team_project.controllers;

import com.team_project.team_project.models.FinancialAid;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

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

    //Method to get the user's form
    @GetMapping("/userForm")
    public String getUserForm(Model model) {
        model.addAttribute("userForm", new User());
        return "form.html";
    }

    //Method to create a new user, and it redirects users to the same page
    @PostMapping("/createUsers")
    public String handleFormSubmission(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value = "isVolunteer", defaultValue = "false") boolean isVolunteer,
            @RequestParam(value = "interests", defaultValue = "") List<String> interests,
            @RequestParam(value = "sessionIds", defaultValue = "") String sessionIds
    ) {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setIsVolunteer(isVolunteer);
        user.setInterests(interests);
        user.setSessionIds(List.of(sessionIds.split(",")).stream().map(String::trim).collect(Collectors.toList()));

        userRepository.save(user);

        return "redirect:/api/users/userForm";
    }

}



