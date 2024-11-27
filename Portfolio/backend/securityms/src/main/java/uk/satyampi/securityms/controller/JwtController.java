package uk.satyampi.SecurityMs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.satyampi.SecurityMs.service.JwtService;

@RestController
@RequestMapping("/security")
public class JwtController {

    private final JwtService jwtService;

    @Autowired
    JwtController(JwtService jwtService) {
        this.jwtService = jwtService;
    }
}
