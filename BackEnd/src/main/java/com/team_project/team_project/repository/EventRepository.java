package com.team_project.team_project.repository;

import com.team_project.team_project.models.EducationalEvents;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<EducationalEvents, Integer> {

}
