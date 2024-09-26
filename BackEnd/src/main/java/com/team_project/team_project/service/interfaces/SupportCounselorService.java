package com.team_project.team_project.service.interfaces;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.RegisterSupportCounselorRequest;
import com.team_project.team_project.dto.Response;

public interface SupportCounselorService {

    List<SupportCounselor> getAllSupportCounselor();
    Optional<SupportCounselor> getSupportCounselorById(Integer id);
    SupportCounselor addSupportCounselor(SupportCounselor newSupportCounselor);
    void deleteSupportCounselor (Integer id);
    SupportCounselor updateSpecializations(Integer id, Set<String> specializations);

  

    Response register(RegisterSupportCounselorRequest registerRequest); 

    Response login(LoginRequest loginRequest);
}