package com.team_project.team_project.controllers;



import com.team_project.team_project.models.JobSeekerProfile;
import com.team_project.team_project.service.impl.JobSeekerProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobseekerprofiles")
public class JobSeekerProfileController {

    @Autowired
    private JobSeekerProfileService jobSeekerProfileService;

    @PostMapping("/create")
    public JobSeekerProfile createJobSeekerProfile(@RequestBody JobSeekerProfile jobSeekerProfile) {
        return jobSeekerProfileService.createJobSeekerProfile(jobSeekerProfile);
    }

    @GetMapping("/all")
    public List<JobSeekerProfile> getAllJobSeekerProfiles() {
        return jobSeekerProfileService.getAllJobSeekerProfiles();
    }
}
