package com.team_project.team_project.controllers;


import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.RegisterSupportCounselorRequest;
import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.service.interfaces.SupportCounselorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/counselor")
public class SupportCounselorController {

    @Autowired
    private SupportCounselorService supportCounselorService;


    @GetMapping("")
    public ResponseEntity<List<SupportCounselor>> getAllSupportCounselors() {
        List<SupportCounselor> counselors = supportCounselorService.getAllSupportCounselor();
        return ResponseEntity.ok(counselors);  
    }

    @PostMapping("/register")
    public ResponseEntity<Response> register(@RequestBody RegisterSupportCounselorRequest request) {
        Response response = supportCounselorService.register(request);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody LoginRequest loginRequest) {
        Response response = supportCounselorService.login(loginRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
