package com.team_project.team_project.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team_project.team_project.models.ESLCenter;
import com.team_project.team_project.repository.ESLRepository;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class LoadESLData implements CommandLineRunner {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(LoadESLData.class);
    private final ESLRepository eslRepository;
    final ObjectMapper objectMapper;

    public LoadESLData(ESLRepository eslRepository, ObjectMapper objectMapper) {
        this.eslRepository = eslRepository;
        this.objectMapper = objectMapper;
    }


    @Override
    public void run(String... args) throws Exception {
        if(eslRepository.count() == 0){
            try(InputStream inputStream = getClass().getResourceAsStream("/data/eslData.json")){
                List<ESLCenter> esls = objectMapper.readValue(inputStream, new TypeReference<List<ESLCenter>>() {});
               eslRepository.saveAll(esls);
                logger.info("ESLs loaded from JSON file{}", esls);
            }catch (IOException e){
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        }else
            logger.info("Data already loaded");
    }
}
