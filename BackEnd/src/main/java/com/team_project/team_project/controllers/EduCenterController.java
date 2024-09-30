package com.team_project.team_project.controllers;

import com.team_project.team_project.exception.ResourceNotFoundException;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.service.interfaces.EduCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/edu-centers")
public class EduCenterController {

    @Autowired
    private EduCenterService eduCenterService;

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EduCenter> getEduCenterById(@PathVariable Integer id) {
        return eduCenterService.getEduCenterById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EduCenter> createEduCenter(@RequestBody EduCenter eduCenter) {
        EduCenter savedEduCenter = eduCenterService.createEduCenter(eduCenter);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEduCenter);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EduCenter> updateEduCenter(@PathVariable Integer id, @RequestBody EduCenter eduCenter) {
        return ResponseEntity.ok(eduCenterService.updateEduCenter(id, eduCenter));
    }



    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteEduCenter(@PathVariable Integer id) {
        try {
            eduCenterService.deleteEduCenter(id);
            return ResponseEntity.noContent().build(); // Deletion successful
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build(); // EduCenter not found
        }
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<EduCenter>> getAllEduCenters() {
        List<EduCenter> eduCenters = eduCenterService.getAllEduCenters();
        return ResponseEntity.ok(eduCenters);
    }
}
