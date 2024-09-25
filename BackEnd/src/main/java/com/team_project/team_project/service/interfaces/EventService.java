package com.team_project.team_project.service.interfaces;

import com.team_project.team_project.models.EducationalEvents;

import java.util.List;
import java.util.Optional;

public interface EventService {
    List<EducationalEvents> getAllEvents();

    Optional<EducationalEvents> getEventById(Integer id);

    EducationalEvents createEvent(EducationalEvents event);

    EducationalEvents updateEvent(Integer id, EducationalEvents eventDetails);

    void deleteEvent(Integer id);
}
