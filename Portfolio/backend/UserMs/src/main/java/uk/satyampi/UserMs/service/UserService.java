package uk.satyampi.UserMs.service;

import uk.satyampi.UserMs.dto.UserDto;
import uk.satyampi.UserMs.entity.User;
import uk.satyampi.UserMs.exception.SatyamPiLogicalException;

public interface UserService {
    User registerUser(UserDto userDto) throws SatyamPiLogicalException;
    UserDto loginUser(UserDto userDto) throws SatyamPiLogicalException;
}
