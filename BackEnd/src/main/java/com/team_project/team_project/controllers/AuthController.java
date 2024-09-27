package com.team_project.team_project.controllers;

import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.models.User;
import com.team_project.team_project.service.interfaces.EduCenterService;
import com.team_project.team_project.service.interfaces.EventService;
import com.team_project.team_project.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private IUserService userService;

    @Autowired
    private EduCenterService eduCenterService;

    @Autowired
    private EventService eventService;

    @PostMapping("/register")
    public ResponseEntity<Response> register(@RequestBody User user) {
        Response response = userService.register(user);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody LoginRequest loginRequest) {
        Response response = userService.login(loginRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);

    }

    @GetMapping("/eduCenters/all")
    public ResponseEntity<List<EduCenter>>getAllEduCenters() {
        List<EduCenter> eduCenters = eduCenterService.getAllEduCenters();
        return ResponseEntity.ok(eduCenters);
    }


    @GetMapping("/events/all")
    public  ResponseEntity<List<EducationalEvents>> getAllEvents() {
        List<EducationalEvents> events= eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }


}
