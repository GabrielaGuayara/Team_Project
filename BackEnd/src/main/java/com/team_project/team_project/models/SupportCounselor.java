package com.team_project.team_project.models;


import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "support_counselors")
public class SupportCounselor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;
    private String lastName;

    private String email;
    private String password;

    private String phone;

    @ElementCollection
    @CollectionTable(name = "specializations", joinColumns = @JoinColumn(name = "counselor_id"))
    @Column(name = "specialization")
    private Set<String> specializations;
    @OneToMany(mappedBy = "supportCounselor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<AssistanceRequest> assistanceRequests;
}