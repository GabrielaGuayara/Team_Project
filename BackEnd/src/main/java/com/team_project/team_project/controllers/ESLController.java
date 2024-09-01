package com.team_project.team_project.controllers;

import com.team_project.team_project.models.ESLCenter;
import com.team_project.team_project.service.ESLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/education")
public class ESLController {

    @Autowired
    private ESLService eslService;

    @GetMapping
    public List<ESLCenter> getAllESLs() {
        return eslService.getAllESLs();
    }

    @GetMapping("/{id}")
    public ESLCenter getESLById(@PathVariable Integer id) {
        return eslService.getESLById(id);
    }

    @PostMapping
    public ESLCenter createESL(@RequestBody ESLCenter esl) {
        return eslService.saveESLCenter(esl);
    }

    @DeleteMapping("/{id}")
    public void deleteLocation(@PathVariable Integer id) {
        eslService.deleteESL(id);
    }

}
