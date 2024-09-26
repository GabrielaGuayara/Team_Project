package com.team_project.team_project.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.team_project.team_project.models.SupportCounselor;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.function.Function;

import static org.apache.tomcat.jni.SSLConf.apply;

@Service
public class JWTUtils {

    private static final long EXPIRATION_TIME = 1000L * 60 *24 * 7; //This calculation secure the token will last 7 days

    private final SecretKey key;

    //jwt constructor where we have to give value to the secret key which is double character or alphanumeric
    //The secret key is the algorithm that will help us to hash the use's password
    public JWTUtils(){
        String secretString = "R8H3q7Kz2N5v1Yp9T4Xw8Ue3S0Bf6Lq7J2M8r9Vt4A2C5E8D7G9Tz1Wk3Fh6Qj8";
        byte[] keyBytes = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));

        this.key = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    //Method to generate generic token
    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .subject(userDetails.getPassword())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()))
                .signWith(key)
                .compact();

    }

    public String generateToken(SupportCounselor counselor) {
        return Jwts.builder()
                .subject(counselor.getEmail())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()))
                .signWith(key)
                .compact();
    }

    //Method to extract username
    public String extractUsername(String token){
        return extractClaims(token, Claims::getSubject);
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction)
    {
        return claimsTFunction.apply(Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload());
    }


    //method to check if token is valid
    public boolean isValidToken(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token){
        return extractClaims(token, Claims :: getExpiration).before(new Date());
    }
}
