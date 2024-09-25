package com.team_project.team_project.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Entity
@Table(name="eslCenters")
public class ESLCenter {
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
