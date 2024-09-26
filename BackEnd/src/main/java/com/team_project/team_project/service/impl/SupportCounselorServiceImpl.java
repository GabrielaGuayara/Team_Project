package com.team_project.team_project.service.impl;

import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.RegisterSupportCounselorRequest;
import com.team_project.team_project.dto.Response;
import com.team_project.team_project.exception.CustomException;
import com.team_project.team_project.models.SupportCounselor;
import com.team_project.team_project.repository.SupportCounselorRepository;
import com.team_project.team_project.service.interfaces.SupportCounselorService;
import com.team_project.team_project.utils.JWTUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SupportCounselorServiceImpl implements SupportCounselorService {

    @Autowired
    private SupportCounselorRepository supportCounselorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private final JWTUtils jwtUtils;
    
    @Autowired
    private final AuthenticationManager authenticationManager;

    public SupportCounselorServiceImpl(SupportCounselorRepository supportCounselorRepository,
                                       PasswordEncoder passwordEncoder, JWTUtils jwtUtils,
                                       AuthenticationManager authenticationManager) {
        this.supportCounselorRepository = supportCounselorRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public List<SupportCounselor> getAllSupportCounselor() {
        return supportCounselorRepository.findAll();
    }

    @Override
    public Optional<SupportCounselor> getSupportCounselorById(Integer id) {
        return supportCounselorRepository.findById(id);
    }

    @Override
    public SupportCounselor addSupportCounselor(SupportCounselor newSupportCounselor) {
        return supportCounselorRepository.save(newSupportCounselor);
    }

    @Override
    public void deleteSupportCounselor(Integer id) {
        supportCounselorRepository.deleteById(id);
    }

    @Override
    public SupportCounselor updateSpecializations(Integer id, Set<String> specializations) {
        Optional<SupportCounselor> optionalCounselor = supportCounselorRepository.findById(id);
        if (optionalCounselor.isPresent()) {
            SupportCounselor counselor = optionalCounselor.get();
            counselor.setSpecializations(specializations); 
            return supportCounselorRepository.save(counselor);
        } else {
            throw new RuntimeException("Support Counselor not found with ID: " + id);
        }
    }
@Override
public Response register(RegisterSupportCounselorRequest registerRequest) {
    Response response = new Response();
    try {
        if (supportCounselorRepository.existsByEmail(registerRequest.getEmail())) {
            throw new CustomException(registerRequest.getEmail() + " Already Exists");
        }

        Set<String> specializations = new HashSet<>(registerRequest.getSpecializations());

        SupportCounselor supportCounselor = new SupportCounselor();
        supportCounselor.setFirstName(registerRequest.getFirstName());
        supportCounselor.setLastName(registerRequest.getLastName());
        supportCounselor.setEmail(registerRequest.getEmail());
        supportCounselor.setPhone(registerRequest.getPhone());
        supportCounselor.setSpecializations(specializations); 
        supportCounselor.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        SupportCounselor savedCounselor = supportCounselorRepository.save(supportCounselor);

        var token = jwtUtils.generateToken(savedCounselor);

        response.setStatusCode(200);
        response.setMessage("Support Counselor registered successfully");
        response.setId(savedCounselor.getId());
        response.setEmail(savedCounselor.getEmail());
        response.setRole("Support Counselor");
        response.setName(savedCounselor.getFirstName());
        response.setToken(token);
        response.setExpirationTime("7 Days");
    } catch (CustomException e) {
        response.setStatusCode(400);
        response.setMessage(e.getMessage());
    } catch (Exception e) {
        response.setStatusCode(500);
        response.setMessage("Error Occurred During Support Counselor Registration: " + e.getMessage());
    }
    return response;
}


    

    @Override
    public Response login(LoginRequest loginRequest) {
        Response response = new Response();
        try {
        
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
            var counselor = supportCounselorRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new CustomException("Support Counselor Not Found"));

            var token = jwtUtils.generateToken(counselor);

            response.setStatusCode(200);
            response.setToken(token);
            response.setMessage("Login Successful");
            response.setId(counselor.getId());
            response.setEmail(counselor.getEmail());
            response.setRole("Support Counselor");
            response.setName(counselor.getFirstName());
            response.setExpirationTime("7 Days");
        } catch (CustomException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error Occurred During Login: " + e.getMessage());
        }
        return response;
    }

  
    
}