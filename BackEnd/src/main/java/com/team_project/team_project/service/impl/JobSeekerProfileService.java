package com.team_project.team_project.service.impl;

import com.team_project.team_project.models.JobSeekerProfile;
import com.team_project.team_project.repository.JobSeekerProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobSeekerProfileService {

    @Autowired
    private JobSeekerProfileRepository jobSeekerProfileRepository;

    public JobSeekerProfile createJobSeekerProfile(JobSeekerProfile jobSeekerProfile) {
        return jobSeekerProfileRepository.save(jobSeekerProfile);
    }

    public List<JobSeekerProfile> getAllJobSeekerProfiles() {
        return jobSeekerProfileRepository.findAll();
    }
}