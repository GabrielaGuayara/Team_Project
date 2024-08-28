package com.team_project.team_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team_project.team_project.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}