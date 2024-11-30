package uk.satyampi.SecurityMs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import uk.satyampi.SecurityMs.dto.UserDto;

@RestController
@RequestMapping("/security")
public class JwtController {

    private final RestTemplate restTemplate;

    @Autowired
    public JwtController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody UserDto userDto) throws Exception {

        return null;
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
            return ResponseEntity.status(e.getStatusCode())
                    .body("HTTP Error: " + errorResponse);
        } catch (ResourceAccessException e) {
            // Handle network or connection issues (e.g., service down)
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body("Service is unavailable. Please try again later.");
        } catch (Exception e) {
            // General exception handling
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error during registration: " + e.getMessage());
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<String> adminTest(){
        return new ResponseEntity<>("admin", HttpStatus.OK);
    }
}
