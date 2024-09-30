package com.team_project.team_project.service.impl;

import com.team_project.team_project.exception.ResourceNotFoundException;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.repository.EduCenterRepository;
import com.team_project.team_project.service.interfaces.EduCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EduServiceImpl implements EduCenterService {

    @Autowired
    private EduCenterRepository eduCenterRepository;

    @Override
    public List<EduCenter> getAllEduCenters() {
        return eduCenterRepository.findAll();
    }

    @Override
    public Optional<EduCenter> getEduCenterById(Integer id) {
        return eduCenterRepository.findById(id);
    }

    @Override
    public EduCenter createEduCenter(EduCenter eduCenter) {
        return eduCenterRepository.save(eduCenter);
    }

    @Override
    public EduCenter updateEduCenter(Integer id, EduCenter eduCenterDetails) {
        EduCenter eduCenter = eduCenterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("EduCenter not found"));
        eduCenter.setName(eduCenterDetails.getName());
        eduCenter.setOrganization(eduCenterDetails.getOrganization());
        eduCenter.setBorough(eduCenterDetails.getBorough());
        eduCenter.setLongitude(eduCenterDetails.getLongitude());
        eduCenter.setLatitude(eduCenterDetails.getLatitude());
        eduCenter.setAddress(eduCenterDetails.getAddress());
        eduCenter.setZipcode(eduCenterDetails.getZipcode());
        eduCenter.setPhoneNumber(eduCenterDetails.getPhoneNumber());
        eduCenter.setType(eduCenterDetails.getType());
        eduCenter.setLink(eduCenterDetails.getLink());


        return eduCenterRepository.save(eduCenter);
    }

    @Override
    public void deleteEduCenter(Integer id) {
        if (!eduCenterRepository.existsById(id)) {
            throw new ResourceNotFoundException("EduCenter not found");
        }
        eduCenterRepository.deleteById(id);
    }
}
