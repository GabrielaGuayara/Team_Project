package com.team_project.team_project.models;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Entity
@Table(name = "user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    // This variable will be user for user authentification
    private String role;

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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<AssistanceRequest> assistanceRequests;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<EducationalEvents> events;

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}