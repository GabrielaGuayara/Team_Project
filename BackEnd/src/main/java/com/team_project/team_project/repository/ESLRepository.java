package com.team_project.team_project.repository;

import com.team_project.team_project.models.ESLCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ESLRepository extends JpaRepository <ESLCenter, Integer> {


}
