package com.team_project.team_project.service.impl;

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

    @Override
    public EducationalEvents updateEvent(Integer id, EducationalEvents eventDetails) {
        EducationalEvents updateEvent = eventRepository.findById(id).get();
        if(Objects.nonNull(eventDetails.getName())){
            updateEvent.setName(eventDetails.getName());
        }

        if(Objects.nonNull(eventDetails.getDescription())){
            updateEvent.setDescription(eventDetails.getDescription());
        }

        if(Objects.nonNull(eventDetails.getLocation())){
            updateEvent.setLocation(eventDetails.getLocation());
        }

//        if(Objects.nonNull(eventDetails.getDateTime())){
//            updateEvent.setDateTime(eventDetails.getDateTime());
//        }
        return eventRepository.save(updateEvent);

    }

    @Override
    public void deleteEvent(Integer id) {
        eventRepository.deleteById(id);
    }

}
