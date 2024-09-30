package com.team_project.team_project.controllers;

import com.team_project.team_project.dto.Response;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.service.interfaces.EduCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/edu-centers")
public class EduCenterController {

        @Autowired
        private EduCenterService eduCenterService;


        @GetMapping("/get-by-id/{id}")
        @PreAuthorize("hasAuthority('ADMIN')")
         public Optional<EduCenter> getEduCenterById(@PathVariable Integer id) {
               return eduCenterService.getEduCenterById(id);
        }

//        @PostMapping("/add")
//         public EducationalEvents updaEvent(@RequestBody EducationalEvents event) {
//        return eduCenterService.createEvent(event);
//         }
        @PostMapping
        @PreAuthorize("hasAuthority('ADMIN')")
        public ResponseEntity <EduCenter> createEduCenter(@RequestBody EduCenter eduCenter) {
            EduCenter savedEduCenter =  eduCenterService.createEduCenter(eduCenter);
            return ResponseEntity.ok(savedEduCenter);
        }


        @DeleteMapping("/{id}")
        @PreAuthorize("hasAuthority('ADMIN')")
        public void deleteLocation(@PathVariable Integer id) {
            eduCenterService.deleteEduCenter(id);
        }

}
