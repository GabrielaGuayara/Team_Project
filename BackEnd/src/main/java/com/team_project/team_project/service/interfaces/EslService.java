package com.team_project.team_project.service.interfaces;

import com.team_project.team_project.models.ESLCenter;

import java.util.List;

public interface EslService {

    List<ESLCenter> getAllESLs();
//    Optional<ESLCenter> getESLById(Integer id);
    ESLCenter createESL(ESLCenter eslCenter);
    ESLCenter updateESL(Integer id, ESLCenter eslCenter);
    void deleteESL(Integer id);
}



