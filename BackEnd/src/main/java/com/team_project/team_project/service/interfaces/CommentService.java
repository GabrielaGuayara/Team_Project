package com.team_project.team_project.service.interfaces;

import com.team_project.team_project.models.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {

    List<Comment> getAllComments();
    Optional <Comment> getCommentById(Integer id);
    Comment saveComment(Comment comment);
    void delete (Integer id);

}
