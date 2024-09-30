package com.team_project.team_project.utils;

import com.team_project.team_project.models.User;
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
import static org.yaml.snakeyaml.tokens.Token.ID.Key;

@Service
public class JWTUtils {

    private static final long EXPIRATION_TIME =  1000L * 60 * 60 * 24 * 7; //This calculation secure the token will last 7 days

    private static SecretKey key;

    //jwt constructor where we have to give value to the secret key which is double character or alphanumeric
    //The secret key is the algorithm that will help us to hash the use's password
    public JWTUtils(){
        String secreteString = "843567893696976453275974432697R634976R738467TR678T34865R6834R8763T478378637664538745673865783678548735687R3";
        byte[] keyBytes = Base64.getDecoder().decode(secreteString.getBytes(StandardCharsets.UTF_8));

        this.key = new SecretKeySpec(keyBytes, "HmacSHA256");
    }

    public static String generateToken(User user) {
        return Jwts.builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public String generateToken(SupportCounselor counselor) {
        return Jwts.builder()
                .subject(counselor.getEmail())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // Set expiration
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
