package com.team_project.team_project.controllers;

import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.service.interfaces.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/admin/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("all")
    public List<EducationalEvents> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EducationalEvents> getEventById(@PathVariable Integer id) {
        return eventService.getEventById(id).map(event ->
                        ResponseEntity.ok(event))
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public EducationalEvents createEvent(@RequestBody EducationalEvents event) {
        return eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EducationalEvents> updateEvent(@PathVariable Integer id, @RequestBody EducationalEvents eventDetails) {
        return ResponseEntity.ok(eventService.updateEvent(id, eventDetails));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();

    }
}

