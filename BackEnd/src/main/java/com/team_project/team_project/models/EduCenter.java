package com.team_project.team_project.models;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.http.ResponseEntity;

@Data
@Entity
@Table(name="eduCenters")
public class EduCenter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String organization;
    private String borough;
    private Double longitude;
    private Double latitude;
    private String address;
    private String zipcode;
    private String phoneNumber;
    private String type;
    private String link;


}
