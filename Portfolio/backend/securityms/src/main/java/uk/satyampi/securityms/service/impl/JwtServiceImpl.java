package uk.satyampi.SecurityMs.service.impl;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import uk.satyampi.SecurityMs.dto.UserDto;
import uk.satyampi.SecurityMs.exception.SatyamPiLogicalException;
import uk.satyampi.SecurityMs.service.JwtService;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {

    private final String  SECRET_KEY;
    private final int EXPIRATION_TIME;

    private final AuthenticationManager authenticationManager;

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }

    @Autowired
    public JwtServiceImpl(@Value("${SECRET_KEY}") String secretKey,@Value("${EXPIRATION_TIME}")int jwtExpirationMs,AuthenticationManager authenticationManager) {
        this.SECRET_KEY = secretKey;
        this.EXPIRATION_TIME = jwtExpirationMs;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public UserDto verifyUser(UserDto userDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPasswordHash()));
        if(authentication.isAuthenticated()){
            userDto.setJwtToken(generateTokenFromUsername(userDto));
            return userDto;
        }
        return null;
    }
    
    @Override
    public String getJwtFromHeader(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("jwtToken".equals(cookie.getName())) {
                    return cookie.getValue();  // Return the JWT token from the cookie
                }
            }
        }
        return null;
    }

    @Override
    public String generateTokenFromUsername(UserDto userDto) {
        return Jwts.builder()
                .subject(userDto.getEmail())
                .claim("role", userDto.getRole())
                .issuedAt(new Date())
                .expiration(new Date((new Date()).getTime() + EXPIRATION_TIME))
                .signWith(key())
                .compact();
    }

    @Override
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
                .verifyWith((SecretKey) key())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    public String getClaimFromJwtToken(String token) {
        return Jwts.parser()
                .verifyWith((SecretKey) key())
                .build()
                .parseSignedClaims(token)
                .getPayload().get("role", String.class);
    }


    @Override
    public boolean validateJwtToken(String authToken) throws SatyamPiLogicalException {
        try {
            Jwts.parser().verifyWith((SecretKey) key()).build().parseSignedClaims(authToken);
            return true;
        } catch (MalformedJwtException | IllegalArgumentException e) {
            throw new SatyamPiLogicalException("Invalid JWT token",e);
        } catch (ExpiredJwtException e) {
            throw new SatyamPiLogicalException("Expired JWT token", e);
        } catch (UnsupportedJwtException e) {
            throw new SatyamPiLogicalException("Unsupported JWT token", e);
        }
    }
}
