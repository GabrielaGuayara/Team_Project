package com.team_project.team_project.seed;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.team_project.team_project.models.User;
import com.team_project.team_project.repository.UserRepository;

import java.util.List;

@Component
public class UserSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    public UserSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        User user1 = new User();
            user1.setFirstName("Admin");
        user1.setLastName("Admin");
        user1.setEmail("admin@gmail.com");
        user1.setPassword("admin");
        user1.setRole("ADMIN");
        user1.setIsVolunteer(false);
        user1.setInterests(List.of("jobs", "housing"));

        User user2 = new User();
        user2.setFirstName("Micheal");
        user2.setLastName("Jackson");
        user2.setEmail("kingofpop@yahoo.com");
        user2.setPassword("heehee");
        user2.setIsVolunteer(true);
        user2.setInterests(List.of("legal", "education"));

        User user3 = new User();
        user3.setFirstName("Dog");
        user3.setLastName("Bark");
        user3.setEmail("imsuchagoodboy@woof.com");
        user3.setPassword("dogizkewl");
        user3.setIsVolunteer(false);
        user3.setInterests(List.of("housing", "jobs"));

        User user4 = new User();
        user4.setFirstName("Pretty");
        user4.setLastName("Kitty");
        user4.setEmail("IhateHuman@meow.com");
        user4.setPassword("letmeout");
        user4.setIsVolunteer(true);
        user4.setInterests(List.of("volunteer", "jobs"));

        User user5 = new User();
        user5.setFirstName("Sir Stinky");
        user5.setLastName("Brown");
        user5.setEmail("stinkybrown@eww.com");
        user5.setPassword("ihatesoap");
        user5.setIsVolunteer(false);
        user5.setInterests(List.of("education", "housing"));

        userRepository.saveAll(List.of(user1, user2, user3, user4, user5));
    }
}
