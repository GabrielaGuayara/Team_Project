package com.team_project.team_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.team_project.team_project.models.AssistanceRequest;
import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.SupportCounselorRepository;
import com.team_project.team_project.repository.UserRepository;
import com.team_project.team_project.service.interfaces.AssistanceRequestService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/assistance-requests")
public class AssistanceRequestController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AssistanceRequestService assistanceRequestService;

    @Autowired
    private SupportCounselorRepository supportCounselorRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createAssistanceRequest(
        @RequestParam("userId") Integer userId, 
        @RequestParam("supportCounselorId") Integer supportCounselorId, 
        @RequestBody AssistanceRequest assistanceRequest) {
        
        try {
            // Fetch the user based on the provided userId
            Optional<User> userOpt = userRepository.findById(userId);
            if (userOpt.isEmpty()) {
                return ResponseEntity.badRequest().body("User not found");
            }
            // Set the user to the assistance request
            assistanceRequest.setUser(userOpt.get());
    
            // Fetch the SupportCounselor based on the provided supportCounselorId
            Optional<SupportCounselor> supportCounselorOpt = supportCounselorRepository.findById(supportCounselorId);
            if (supportCounselorOpt.isEmpty()) {
                return ResponseEntity.badRequest().body("Support Counselor not found");
            }
            // Set the support counselor to the assistance request
            assistanceRequest.setSupportCounselor(supportCounselorOpt.get());
    
            // Set additional details for the assistance request
            assistanceRequest.setRequestedAt(LocalDateTime.now());
            assistanceRequest.setStatus("Pending"); // Or any default status
    
            // Save the assistance request
            AssistanceRequest createdRequest = assistanceRequestService.createAssistanceRequest(assistanceRequest);
            return ResponseEntity.ok().body(createdRequest);
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error creating assistance request: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<AssistanceRequest>> getAllAssistanceRequests() {
        List<AssistanceRequest> requests = assistanceRequestService.getAllAssistanceRequests();
        return ResponseEntity.ok().body(requests);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAssistanceRequestById(@PathVariable Long id) {
        Optional<AssistanceRequest> request = assistanceRequestService.getAssistanceRequestById(id);
        if (request.isPresent()) {
            return ResponseEntity.ok().body(request);
        } else {
            return ResponseEntity.badRequest().body("Assistance Request Not Found!");
        }
    }

    @GetMapping("/counselor/{counselorId}")
    public ResponseEntity<List<AssistanceRequest>> getRequestsForCounselor(@PathVariable Long counselorId) {
        List<AssistanceRequest> requests = assistanceRequestService.getRequestsForCounselor(counselorId);
        return ResponseEntity.ok().body(requests);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AssistanceRequest>> getRequestsByUser(@PathVariable Long userId) {
        List<AssistanceRequest> requests = assistanceRequestService.getRequestsByUser(userId);
        return ResponseEntity.ok().body(requests);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAssistanceRequest(
            @PathVariable Long id,
            @RequestBody AssistanceRequest assistanceRequest) {
        Optional<AssistanceRequest> updatedRequest = Optional
                .ofNullable(assistanceRequestService.updateAssistanceRequest(id, assistanceRequest));
        if (updatedRequest.isPresent()) {
            return ResponseEntity.ok().body(updatedRequest);
        } else {
            return ResponseEntity.badRequest().body("Assistance Request Could Not Be Updaated!");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAssistanceRequest(@PathVariable Long id) {
        assistanceRequestService.deleteAssistanceRequest(id);
        return ResponseEntity.ok().body("Assistance Request Delete");
    }
}