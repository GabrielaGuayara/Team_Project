package com.team_project.team_project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team_project.team_project.models.AssistanceRequest;
import com.team_project.team_project.repository.AssistanceRequestRepository;
import com.team_project.team_project.service.interfaces.AssistanceRequestService;

import java.util.List;
import java.util.Optional;

@Service
public class AssistanceRequestServiceImpl implements AssistanceRequestService {

    @Autowired
    private AssistanceRequestRepository assistanceRequestRepository;

    @Override
    public AssistanceRequest createAssistanceRequest(AssistanceRequest assistanceRequest) {
        return assistanceRequestRepository.save(assistanceRequest);
    }

    @Override
    public List<AssistanceRequest> getAllAssistanceRequests() {
        return assistanceRequestRepository.findAll();
    }

    @Override
    public Optional<AssistanceRequest> getAssistanceRequestById(Long id) {
        return assistanceRequestRepository.findById(id);
    }

    @Override
    public List<AssistanceRequest> getRequestsForCounselor(Long counselorId) {
        return assistanceRequestRepository.findBySupportCounselorId(counselorId);
    }

    @Override
    public List<AssistanceRequest> getRequestsByUser(Long userId) {
        return assistanceRequestRepository.findByUserId(userId);
    }

    @Override
    public AssistanceRequest updateAssistanceRequest(Long id, AssistanceRequest assistanceRequest) {
        Optional<AssistanceRequest> existingRequest = assistanceRequestRepository.findById(id);
        if (existingRequest.isPresent()) {
            AssistanceRequest updatedRequest = existingRequest.get();
            updatedRequest.setStatus(assistanceRequest.getStatus());
            return assistanceRequestRepository.save(updatedRequest);
        } else {
            throw new RuntimeException("Assistance request not found");
        }
    }

    @Override
    public void deleteAssistanceRequest(Long id) {
        assistanceRequestRepository.deleteById(id);
    }
}
