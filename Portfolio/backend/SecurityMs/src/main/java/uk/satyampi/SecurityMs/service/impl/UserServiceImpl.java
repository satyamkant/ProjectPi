package uk.satyampi.SecurityMs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import uk.satyampi.SecurityMs.dto.UserDetails;
import uk.satyampi.SecurityMs.dto.UserDto;
import uk.satyampi.SecurityMs.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final RestTemplate restTemplate;

    @Autowired
    public UserServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String userServiceUrl = "http://UserMs/user/getuser";

        // Set HTTP headers (if needed, e.g., Authorization)
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");



        // Create the request entity with headers and body
        UserDto userDto = new UserDto();
        userDto.setEmail(username);

        HttpEntity<UserDto> requestEntity = new HttpEntity<>(userDto, headers);

        try {
            // Make the REST call
            ResponseEntity<UserDto> responseEntity = restTemplate.exchange(
                    userServiceUrl,
                    HttpMethod.POST,
                    requestEntity,
                    UserDto.class
            );

            userDto = responseEntity.getBody();

        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        }

        return new UserDetails(userDto);
    }
}
