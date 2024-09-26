package com.team_project.team_project.dto;


import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterSupportCounselorRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private Set<String> specializations;
}