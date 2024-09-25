package com.team_project.team_project.service.impl;

import com.team_project.team_project.models.ESLCenter;
import com.team_project.team_project.repository.ESLRepository;
import com.team_project.team_project.service.interfaces.EslService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class eslServiceImpl implements EslService {
    @Autowired
    private ESLRepository eslRepository;

    public List<ESLCenter> getAllESLs() {
        return eslRepository.findAll();
    }

    public Optional <ESLCenter> getESLById(Integer id) {
        return eslRepository.findById(id);
    }

    public ESLCenter createESL(ESLCenter eslCenter) {
        return eslRepository.save(eslCenter);
    }


    public ESLCenter updateESL(Integer id, ESLCenter eslCenter){

        ESLCenter updatedESL = eslRepository.findById(id).get();
        if(Objects.nonNull(eslCenter.getName())){
            updatedESL.setName(eslCenter.getName());
        }

        if(Objects.nonNull(eslCenter.getBorough())){
            updatedESL.setBorough(eslCenter.getBorough());
        }

        if(Objects.nonNull(eslCenter.getLatitude())){
            updatedESL.setLatitude(eslCenter.getLatitude());
        }

        if(Objects.nonNull(eslCenter.getLongitude())){
            updatedESL.setLongitude(eslCenter.getLongitude());
        }


        if(Objects.nonNull(eslCenter.getType())){
            updatedESL.setType(eslCenter.getType());
        }

        return eslRepository.save(updatedESL);

    }

    public void deleteESL(Integer id) {
        eslRepository.deleteById(id);
    }
}



