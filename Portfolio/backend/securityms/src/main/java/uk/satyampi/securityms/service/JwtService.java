package uk.satyampi.SecurityMs.service;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;

import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    <T> T extractClaim(String token, Function<Claims, T> claimsResolver);

    String extractUsername(String token);

    String extractUserEmailFromToken(String token);
}
