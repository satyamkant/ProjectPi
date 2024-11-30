package uk.satyampi.SecurityMs.service.impl;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import uk.satyampi.SecurityMs.exception.SatyamPiLogicalException;
import uk.satyampi.SecurityMs.service.JwtService;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {

    private final String  SECRET_KEY;

    private final int EXPIRATION_TIME;

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }


    public JwtServiceImpl(@Value("${SECRET_KEY}") String secretKey,@Value("${EXPIRATION_TIME}")int jwtExpirationMs) {
        this.SECRET_KEY = secretKey;
        this.EXPIRATION_TIME = jwtExpirationMs;
    }
    
    @Override
    public String getJwtFromHeader(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7); // Remove Bearer prefix
        }
        return null;
    }

    @Override
    public String generateTokenFromUsername(UserDetails userDetails) {
        String username = userDetails.getUsername();
        return Jwts.builder()
                .subject(username)
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
