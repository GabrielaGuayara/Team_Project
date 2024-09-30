package com.team_project.team_project.service.impl;

import com.team_project.team_project.models.Comment;
import com.team_project.team_project.models.EduCenter;
import com.team_project.team_project.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class commentServiceImpl {


    @Autowired
    private CommentRepository commentRepository;


    public List<Comment> getAllESLs() {
        return commentRepository.findAll();
    }

    public Optional<Comment> getESLById(Integer id) {
        return commentRepository.findById(id);
    }

    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteComment(Integer id) {
        commentRepository.deleteById(id);
    }
}
