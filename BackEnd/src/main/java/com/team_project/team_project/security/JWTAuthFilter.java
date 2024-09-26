package com.team_project.team_project.security;

import com.team_project.team_project.service.CustomUserDetailsService;
import com.team_project.team_project.utils.JWTUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.CachingUserDetailsService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

//This method determines if a person has access to any endpoint
@Component
public class JWTAuthFilter extends OncePerRequestFilter {


    @Autowired
    private JWTUtils jwtUtils;

   // This method finds username details
    @Autowired
    private CustomUserDetailsService customUserDetailsService;


    //This method comes from the OncePerRequestFilter class and intercept the request, process it and determine if it is authorized
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        final String jwtToken;
        final String userEmail;


        String requestURI = request.getRequestURI();
        if (requestURI.startsWith("/api/counselor") || requestURI.startsWith("/api/users") || requestURI.startsWith("/api/assistance-requests")) {
            filterChain.doFilter(request, response);
            return;
        }

        if (authHeader == null || authHeader.isBlank()) {
            filterChain.doFilter(request, response);
            return;
        }

        jwtToken = authHeader.substring(7);
        userEmail = jwtUtils.extractUsername(jwtToken);

        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = customUserDetailsService.loadUserByUsername(userEmail);
            if (jwtUtils.isValidToken(jwtToken, userDetails)) {
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                securityContext.setAuthentication(token);
                SecurityContextHolder.setContext(securityContext);
            }
        }
        filterChain.doFilter(request, response);
    }
}
