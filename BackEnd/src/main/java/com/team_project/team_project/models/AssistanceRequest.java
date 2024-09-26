package com.team_project.team_project.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "assistance_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssistanceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "support_counselor_id", nullable = false)
    private SupportCounselor supportCounselor;

    @Column(name = "status")
    private String status;

    @Column(name = "requested_at")
    private LocalDateTime requestedAt;

    @Column(name = "description", length = 1000)
    private String description; 

    @Column(name = "service_type")
    private String serviceType; 
}
