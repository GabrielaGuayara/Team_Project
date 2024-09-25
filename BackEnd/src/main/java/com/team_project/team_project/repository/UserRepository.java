package com.team_project.team_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.team_project.team_project.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}