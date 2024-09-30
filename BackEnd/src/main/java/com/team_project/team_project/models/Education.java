package com.team_project.team_project.models;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Embeddable
public class Education {

    private String degree;
    private String institutionName;
    private String graduationYear;

    // Getters and Setters
}
