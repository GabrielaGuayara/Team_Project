package com.team_project.team_project.service;

import com.team_project.team_project.models.ESLCenter;
import com.team_project.team_project.repository.ESLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ESLService {
        @Autowired
        private ESLRepository eslRepository;

        public List<ESLCenter> getAllESLs() {
            return eslRepository.findAll();
        }

        public ESLCenter getESLById(Integer id) {
            return eslRepository.findById(id).orElse(null);
        }

        public ESLCenter saveESLCenter(ESLCenter eslCenter) {
            return eslRepository.save(eslCenter);
        }

        public void deleteESL(Integer id) {
            eslRepository.deleteById(id);
        }
    }



