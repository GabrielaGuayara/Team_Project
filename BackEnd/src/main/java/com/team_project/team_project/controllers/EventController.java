package com.team_project.team_project.controllers;

import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.service.interfaces.EventService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<EducationalEvents> getEventById(@PathVariable Integer id)
    {
        return eventService.getEventById(id) .map(event ->
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

    }}

//    @Repository
//    public interface EventRepository extends JpaRepository<Event, Long> {
//        List<Event> findByUserId(Long userId);
//    }
//    @Repository
//    public interface UserRepository extends JpaRepository<User, Long> {
//        Optional<User> findByUsername(String username);
//    }
//    @Service
//    public class EventService {
//        @Autowired
//        private EventRepository eventRepository;
//
//        public Event addEvent(Event event) {
//            return eventRepository.save(event);
//        }
//
//        public Event updateEvent(Long id, Event eventDetails) {
//            Event event = eventRepository.findById(id)
//                    .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
//            event.setTitle(eventDetails.getTitle());
//            event.setDateTime(eventDetails.getDateTime());
//            event.setLocation(eventDetails.getLocation());
//            return eventRepository.save(event);
//        }
//
//        public void deleteEvent(Long id) {
//            Event event = eventRepository.findById(id)
//                    .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
//            eventRepository.delete(event);
//        }
//
//        public List<Event> getUserEvents(Long userId) {
//            return eventRepository.findByUserId(userId);
//        }
//    }
//    @Service
//    public class UserService {
//        @Autowired
//        private UserRepository userRepository;
//
//        public User registerUser(User user) {
//            return userRepository.save(user);
//        }
//
//        public Optional<User> findUserById(Long id) {
//            return userRepository.findById(id);
//        }
//
//        // Additional user-related methods can be added here
//    }
//    @Service
//    public class EventService {
//        @Autowired
//        private EventRepository eventRepository;
//
//
//
//        @PreAuthorize("hasRole('ADMIN') or (hasRole('USER') and @eventSecurity.isOwner(#id, authentication))")
//        public Event updateEvent(Long id, Event eventDetails) {
//            Event event = eventRepository.findById(id)
//                    .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
//
//            event.setTitle(eventDetails.getTitle());
//            event.setDateTime(eventDetails.getDateTime());
//            event.setLocation(eventDetails.getLocation());
//            return eventRepository.save(event);
//        }
//
//        @PreAuthorize("hasRole('ADMIN') or (hasRole('USER') and @eventSecurity.isOwner(#id, authentication))")
//        public void deleteEvent(Long id) {
//            Event event = eventRepository.findById(id)
//                    .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
//
//            eventRepository.delete(event);
//        }
//
//        public List<Event> getUserEvents(Long userId) {
//            return eventRepository.findByUserId(userId);
//        }
//    }
//.noContent().build();
//}
//
//@GetMapping("/user/{userId}")
//public ResponseEntity<List<Event>> getUserEvents(@PathVariable Long userId) {
//    List<Event> events = eventService.getUserEvents(userId);
//    return ResponseEntity.ok(events);
//}
//}

