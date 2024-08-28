package com.team_project.team_project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.team_project.team_project.models.Volunteer;
import com.team_project.team_project.repository.VolunteerRepository;

@RestController
@RequestMapping("/api/volunteers")
public class VolunteerController {

     @Autowired
    private VolunteerRepository volunteerRepository;

     @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("")
    public List<Volunteer>findAllVolunteers() {

        return volunteerRepository.findAll();
    }


   @GetMapping("/{volunteerId}")
    public Volunteer getVolunteerId(@PathVariable Integer volunteerId) {

        return volunteerRepository.findById(volunteerId).orElse(null);
    }



    @PostMapping("")
    public Volunteer createVolunteer(@RequestBody Volunteer volunteer) {
        volunteer.setPassword(passwordEncoder.encode(volunteer.getPassword()));
        return  volunteerRepository.save(volunteer);

    }
 

    @PutMapping("/{volunteerId}")
    public Volunteer updateVolunteer(@PathVariable Integer volunteerId, @RequestBody Volunteer newVolunteerDetails) {

    
        Volunteer volunteer = volunteerRepository.findById(volunteerId).orElse(null);

        if (volunteer != null) {

            volunteer.setFirstName(newVolunteerDetails.getFirstName());
            volunteer.setLastName(newVolunteerDetails.getLastName());
            volunteer.setSpecialties(newVolunteerDetails.getSpecialties());
         

            return volunteerRepository.save(volunteer);
        } else {
            return null;
        }
    }


    @DeleteMapping("/{volunteerId}")
    public String deleteVolunteer(@PathVariable Integer volunteerId) {
        volunteerRepository.deleteById(volunteerId);
        return "Volunteer has been deleted successfully";
    }

}
