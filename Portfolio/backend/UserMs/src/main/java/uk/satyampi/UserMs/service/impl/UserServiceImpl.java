package uk.satyampi.UserMs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import uk.satyampi.UserMs.dto.UserDto;
import uk.satyampi.UserMs.entity.User;
import uk.satyampi.UserMs.exception.SatyamPiLogicalException;
import uk.satyampi.UserMs.repository.UserRepository;
import uk.satyampi.UserMs.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(UserDto userDto) throws SatyamPiLogicalException {
        if(userRepository.findByEmail(userDto.getEmail()).isPresent()) {
            throw new SatyamPiLogicalException("User Already Exists");
        }

        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setBio(userDto.getBio());
        user.setRole(userDto.getRole());
        user.setPasswordHash(passwordEncoder.encode(userDto.getPassword()));
        user.setProfilePicturePath(userDto.getProfilePicturePath());
        return userRepository.save(user);
    }

    @Override
    public UserDto loginUser(UserDto userDto) throws SatyamPiLogicalException {
        Optional<User> userOptional = userRepository.findByEmail(userDto.getEmail());
        if(userOptional.isEmpty()) {
            throw new SatyamPiLogicalException("Invalid email or password");
        }

        User user = userOptional.get();
        if(!passwordEncoder.matches(userDto.getPassword(), user.getPasswordHash())) {
            throw new SatyamPiLogicalException("Invalid email or password");
        }

        UserDto response = new UserDto();
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;
    }

}
