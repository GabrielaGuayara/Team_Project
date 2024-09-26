package com.team_project.team_project.service;

import com.team_project.team_project.exception.CustomException;
import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.SupportCounselorRepository;
import com.team_project.team_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//This is the service will be used to compare the provided credential by the use with the store ones
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SupportCounselorRepository supportCounselorRepository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElse(null);

        if (user != null) {
            return org.springframework.security.core.userdetails.User.withUsername(user.getEmail())
                    .password(user.getPassword())  
                    .authorities(user.getRole())  
                    .build();
        }

        SupportCounselor counselor = supportCounselorRepository.findByEmail(username)
                .orElseThrow(() -> new CustomException("Username/Email not Found"));

        return org.springframework.security.core.userdetails.User.withUsername(counselor.getEmail())
                .password(counselor.getPassword()) 
                .authorities("ROLE_COUNSELOR")
                .build();
    }

}
