package uk.satyampi.UserMs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.satyampi.UserMs.dto.UserDto;
import uk.satyampi.UserMs.exception.SatyamPiLogicalException;
import uk.satyampi.UserMs.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto) throws SatyamPiLogicalException {
        userService.registerUser(userDto);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto) throws SatyamPiLogicalException {
        userService.loginUser(userDto);
        return ResponseEntity.ok("User logged in successfully");
    }

}
