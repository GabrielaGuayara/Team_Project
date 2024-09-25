package com.team_project.team_project.controllers;

import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.service.interfaces.EventService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<EducationalEvents> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}") public ResponseEntity<EducationalEvents> getEventById(@PathVariable Integer id)
    {
        return eventService.getEventById(id) .map(event ->
                ResponseEntity.ok(event))
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/add")
    public EducationalEvents createEvent(@RequestBody EducationalEvents event) {
        return eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EducationalEvents> updateEvent(@PathVariable Integer id, @RequestBody EducationalEvents eventDetails) {
        return ResponseEntity.ok(eventService.updateEvent(id, eventDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}
