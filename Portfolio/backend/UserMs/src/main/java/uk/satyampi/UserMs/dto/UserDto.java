package uk.satyampi.UserMs.dto;

import lombok.*;
import uk.satyampi.UserMs.enums.UserRole;

@Data
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String name;
    private String email;
    private String password;
    private String bio;
    private UserRole role;
    private String profilePicturePath;

}
