package com.team_project.team_project.dto;

import lombok.Data;

import java.util.List;

@Data
public class Response {

    private int statusCode;
    private String message;

    private String token;
    private String role;
    private String expirationTime;
    private String name;
    private Integer id;
    private String email;


    public void setId(Integer id) {
    }
}
