package com.team_project.team_project.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Data
@Entity
@Table(name = "events")
public class EducationalEvents {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String location;
    private String url;
    private String type;
    private String date;
    private String dateTime;

}
