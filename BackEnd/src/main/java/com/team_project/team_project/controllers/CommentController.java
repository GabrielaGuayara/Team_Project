package com.team_project.team_project.controllers;

import com.team_project.team_project.models.Comment;
import com.team_project.team_project.repository.CommentRepository;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping
    public List<Comment> getComments() {
        return commentRepository.findAll();
        }

        @PostMapping
        public ResponseEntity<Comment> postComment(@RequestBody Comment comment) {
            Comment savedComment = commentRepository.save(comment);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedComment);
        }


        @DeleteMapping("/delete")
    public ResponseEntity<Comment> deleteComment(@PathVariable Integer id){
//
            commentRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }

    }


