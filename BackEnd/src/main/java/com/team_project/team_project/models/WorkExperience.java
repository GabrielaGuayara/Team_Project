package com.team_project.team_project.models;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Embeddable
public class WorkExperience {

    private String jobTitle;
    private String companyName;
    private String datesOfEmployment;
    private String responsibilitiesAndAchievements;

    // Getters and Setters
}