package com.team_project.team_project.service.interfaces;

import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.repository.EduCenterRepository;

import java.util.List;
import java.util.Optional;

public interface EduCenterService {

    List<EduCenter> getAllEduCenters();

    Optional<EduCenter> getEduCenterById(Integer id);

    EduCenter createEduCenter(EduCenter eduCenter);

    EduCenter updateEduCenter(Integer id, EduCenter eduCenter);

    void deleteEduCenter(Integer id);
}



