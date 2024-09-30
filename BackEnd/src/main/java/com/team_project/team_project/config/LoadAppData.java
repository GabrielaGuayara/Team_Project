package com.team_project.team_project.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.models.EducationalEvents;
import com.team_project.team_project.repository.EduCenterRepository;
import com.team_project.team_project.repository.EventRepository;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class LoadAppData implements CommandLineRunner {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(LoadAppData.class);
    private final EduCenterRepository eslRepository;
    private final EventRepository eventRepository;

    final ObjectMapper objectMapper;

    public LoadAppData(EduCenterRepository eslRepository, EventRepository eventRepository, ObjectMapper objectMapper) {
        this.eslRepository = eslRepository;
        this.eventRepository = eventRepository;
        this.objectMapper = objectMapper;
    }


    @Override
    public void run(String... args) throws Exception {
        loadESLCenters();
        loadEvents();

    }

    //Method to upload data from the ESLData json file
    private void loadESLCenters() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<EduCenter>> typeReference = new TypeReference<List<EduCenter>>() {
        };
        InputStream inputStream = null;
        try {
            inputStream = new ClassPathResource("/data/eslData.json").getInputStream();
            List<EduCenter> eslCenters = mapper.readValue(inputStream, typeReference);
            eslRepository.saveAll(eslCenters);
            logger.info("ESL Centers loaded successfully.");
        } catch (IOException e) {
            logger.error("Unable to load ESL Centers: " + e.getMessage());
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    logger.error("Unable to close input stream: " + e.getMessage());
                }
            }
        }
    }

    //Method to load data from events json file
    private void loadEvents() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<EducationalEvents>> typeReference = new TypeReference<List<EducationalEvents>>() {
        };
        InputStream inputStream = null;
        try {
            inputStream = new ClassPathResource("/data/eduEvents.json").getInputStream();
            List<EducationalEvents> eduEvents = mapper.readValue(inputStream, typeReference);
            eventRepository.saveAll(eduEvents);
            logger.info("Events Centers loaded successfully.");
        } catch (IOException e) {
            logger.error("Unable to load Events Centers: " + e.getMessage());
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    logger.error("Unable to close input stream: " + e.getMessage());
                }
            }
        }
    }
}
