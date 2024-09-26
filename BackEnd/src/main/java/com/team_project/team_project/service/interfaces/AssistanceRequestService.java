package com.team_project.team_project.service.interfaces;

import java.util.List;
import java.util.Optional;

import com.team_project.team_project.models.AssistanceRequest;

public interface AssistanceRequestService {

    AssistanceRequest createAssistanceRequest(AssistanceRequest assistanceRequest);

    List<AssistanceRequest> getAllAssistanceRequests();

    Optional<AssistanceRequest> getAssistanceRequestById(Long id);

    List<AssistanceRequest> getRequestsForCounselor(Long counselorId);

    List<AssistanceRequest> getRequestsByUser(Long userId);

    AssistanceRequest updateAssistanceRequest(Long id, AssistanceRequest assistanceRequest);

    void deleteAssistanceRequest(Long id);
}
