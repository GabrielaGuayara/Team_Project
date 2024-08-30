package com.team_project.team_project.models;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    // If the user is a volunteer then they would get a chance to take volunteer
    // opportunities;
    private Boolean isVolunteer;
    // This variable name can be renamed but the idea of the variable name is that
    // the user's choice in finding jobs, education opportunity or housing would be
    // put in here
    private List<String> Interests;

    // A sessionIds are basically sessions in which users are able to communicate
    // with different devices,
    // think of messaging on microsoft teams app using your phone and laptop, they
    // both are the same same account but they have different session ids that
    // represent the user
    // i.e users1 phone session id can be 101213 but users 1 laptop can be 2312
    // although they are different, they both represent the user and send the
    // message regardless on which
    // device;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> sessionIds;

}