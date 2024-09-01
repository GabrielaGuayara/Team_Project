package com.team_project.team_project.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@AllArgsConstructor
@Table(name="eslCenters")
public class ESLCenter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String borough;
    private String info;
    private Double longitude;
    private Double latitude;


    public ESLCenter(){}



}
