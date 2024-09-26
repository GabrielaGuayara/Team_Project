package com.team_project.team_project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.team_project.team_project.models.SupportCounselor;


@Repository
public interface SupportCounselorRepository extends JpaRepository<SupportCounselor, Integer> {
    boolean existsByEmail(String email);
    Optional<SupportCounselor> findByEmail(String email);
}
