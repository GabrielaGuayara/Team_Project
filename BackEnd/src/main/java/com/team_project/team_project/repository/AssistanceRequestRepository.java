package com.team_project.team_project.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.team_project.team_project.models.AssistanceRequest;

import java.util.List;

public interface AssistanceRequestRepository extends JpaRepository<AssistanceRequest, Long> {

    List<AssistanceRequest> findBySupportCounselorId(Long supportCounselorId);

    List<AssistanceRequest> findByUserId(Long userId);
}
