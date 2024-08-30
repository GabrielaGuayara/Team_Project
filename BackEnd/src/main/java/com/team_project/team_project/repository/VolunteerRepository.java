package com.team_project.team_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team_project.team_project.models.Volunteer;

public interface VolunteerRepository extends JpaRepository< Volunteer,Integer>  {

}
