package uk.satyampi.SecurityMs.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import uk.satyampi.SecurityMs.dto.UserDto;
import uk.satyampi.SecurityMs.exception.SatyamPiLogicalException;
import uk.satyampi.SecurityMs.service.JwtService;

@RestController
@RequestMapping("/security")
public class JwtController {

    private final RestTemplate restTemplate;
    private final JwtService jwtService;

    @Autowired
    public JwtController(RestTemplate restTemplate, JwtService jwtService) {
        this.restTemplate = restTemplate;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto, HttpServletResponse response) throws Exception {

        // Create a cookie with the JWT token
        String jwtToken = jwtService.verifyUser(userDto).getJwtToken();
        Cookie cookie = new Cookie("jwtToken", jwtToken);
        cookie.setHttpOnly(true);  // Make sure it's HttpOnly
        cookie.setSecure(true);    // Make sure it's Secure (use in production)
        cookie.setPath("/");       // The path where the cookie is valid
        cookie.setMaxAge(3600);     // Set cookie expiration time (in seconds)
        cookie.setDomain("satyampi.uk");

        response.addCookie(cookie);  // Add cookie to response
        return new ResponseEntity<>("Login Successful",HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) throws Exception {
        String userServiceUrl = "http://UserMs/user/register";

        // Set HTTP headers (if needed, e.g., Authorization)
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        HttpEntity<UserDto> requestEntity = new HttpEntity<>(userDto, headers);

        try {
            // Make the REST call

            return restTemplate.exchange(
                    userServiceUrl,
                    HttpMethod.POST,
                    requestEntity,
                    UserDto.class
            );
        } catch (HttpClientErrorException | HttpServerErrorException e) {
            // Specific exception handling for HTTP errors
            String errorResponse = e.getResponseBodyAsString();
            throw new SatyamPiLogicalException("Http exception",e);
        } catch (ResourceAccessException e) {
            // Handle network or connection issues (e.g., service down)
            throw new SatyamPiLogicalException("Server not available",e);
        } catch (Exception e) {
            // General exception handling
            throw new SatyamPiLogicalException("Internal server error",e);
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<String> adminTest(){
        return new ResponseEntity<>("admintest successful", HttpStatus.OK);
    }
}
