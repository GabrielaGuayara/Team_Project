package com.team_project.team_project.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Setter
@Getter
@Entity
@Data
@Table(name = "job_seeker_profile")
public class JobSeekerProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String linkedInProfile;
    private String professionalSummary;

    @ElementCollection
    private List<String> keySkills;

    @ElementCollection
    @CollectionTable(name = "work_experience", joinColumns = @JoinColumn(name = "job_seeker_profile_id"))
    private List<WorkExperience> workExperience;

    @ElementCollection
    @CollectionTable(name = "education", joinColumns = @JoinColumn(name = "job_seeker_profile_id"))
    private List<Education> education;

    @ElementCollection
    private List<String> certifications;

    @ElementCollection
    private List<String> projects;

    @ElementCollection
    private List<String> volunteerExperience;

    @ElementCollection
    private List<String> languagesSpoken;

    @ElementCollection
    private List<String> references;

    // Getters and Setters
}