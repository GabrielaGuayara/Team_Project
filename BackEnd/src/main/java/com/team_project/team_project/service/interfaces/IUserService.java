package com.team_project.team_project.service.interfaces;

import com.team_project.team_project.dto.LoginRequest;
import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.User;

public interface IUserService {
    Response register(User user);
    Response login(LoginRequest loginRequest);
}
