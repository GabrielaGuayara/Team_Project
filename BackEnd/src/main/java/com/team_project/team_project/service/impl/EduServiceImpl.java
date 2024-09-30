package com.team_project.team_project.service.impl;

import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.repository.EduCenterRepository;
import com.team_project.team_project.service.interfaces.EduCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class eduServiceImpl implements EduCenterService {
    @Autowired
    private EduCenterRepository eduCenterRepository;

    public List<EduCenter> getAllEduCenters() {
        return eduCenterRepository.findAll();
    }

    @Override
    public Optional<EduCenter> getEduCenterById(Integer id) {
        return Optional.empty();
    }

    @Override
    public EduCenter createEduCenter(EduCenter eduCenter) {
        return  eduCenterRepository.save(eduCenter);
    }

    public Optional <EduCenter> getESLById(Integer id) {
        return  eduCenterRepository.findById(id);
    }



    public EduCenter updateEduCenter(Integer id, EduCenter eduCenter){

//        EduCenter updatedESL =  eduCenterRepository.findById(id).get();
//        if(Objects.nonNull(eslCenter.getName())){
//            updatedESL.setName(eslCenter.getName());
//        }
//
//        if(Objects.nonNull(eslCenter.getBorough())){
//            updatedESL.setBorough(eslCenter.getBorough());
//        }
//
//        if(Objects.nonNull(eslCenter.getLatitude())){
//            updatedESL.setLatitude(eslCenter.getLatitude());
//        }
//
//        if(Objects.nonNull(eslCenter.getLongitude())){
//            updatedESL.setLongitude(eslCenter.getLongitude());
//        }
//
//
//        if(Objects.nonNull(eslCenter.getType())){
//            updatedESL.setType(eslCenter.getType());
//        }

        return eduCenterRepository.save(eduCenter);

    }

    public void deleteEduCenter(Integer id) {

        eduCenterRepository.deleteById(id);
    }
}



