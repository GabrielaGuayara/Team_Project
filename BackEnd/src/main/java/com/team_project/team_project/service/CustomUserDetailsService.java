package com.team_project.team_project.service;

import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.SupportCounselorRepository;
import com.team_project.team_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SupportCounselorRepository supportCounselorRepository;


    //Admin
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElse(null);
        if (user != null) {
            return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                    .password(user.getPassword())
                    .authorities("ADMIN")  // Assuming getRole() returns a collection of authorities
                    .build();
        }


        // If user not found, try to find SupportCounselor
        SupportCounselor counselor = supportCounselorRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username/Email not Found"));

        // Build UserDetails for SupportCounselor
        return org.springframework.security.core.userdetails.User.withUsername(counselor.getEmail())
                .password(counselor.getPassword())
                .authorities("ROLE_COUNSELOR")  // Assuming a fixed role for counselors
                .build();
    }
}


