package com.team_project.team_project.service.impl;

import com.team_project.team_project.exception.ResourceNotFoundException;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.repository.EventRepository;
import com.team_project.team_project.service.interfaces.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<EducationalEvents> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Optional<EducationalEvents> getEventById(Integer id) {
        return eventRepository.findById(id);
    }


    @Override
    public EducationalEvents createEvent(EducationalEvents event) {
        return eventRepository.save(event);
    }

    public EducationalEvents updateEvent(Integer id, EducationalEvents eventDetails) {
            EducationalEvents event = eventRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
            event.setName(eventDetails.getName());
            event.setDateTime(eventDetails.getDateTime());
            event.setLocation(eventDetails.getLocation());
            event.setDescription(eventDetails.getDescription());
            event.setUrl(eventDetails.getUrl());
            event.setDate(eventDetails.getDate());

        return eventRepository.save(event);
        }


    @Override
    public void deleteEvent(Integer id) {
        eventRepository.deleteById(id);
    }


}
