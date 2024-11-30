package uk.satyampi.SecurityMs.service;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import uk.satyampi.SecurityMs.exception.SatyamPiLogicalException;

import java.util.Map;
import java.util.function.Function;

public interface JwtService {
    String getJwtFromHeader(HttpServletRequest request);

    String generateTokenFromUsername(UserDetails userDetails);

    String getUserNameFromJwtToken(String token);

    boolean validateJwtToken(String authToken) throws SatyamPiLogicalException;
}
