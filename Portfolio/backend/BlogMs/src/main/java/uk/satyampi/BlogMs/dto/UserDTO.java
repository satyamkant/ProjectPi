package uk.satyampi.BlogMs.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import uk.satyampi.BlogMs.enums.UserRole;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserDTO {

    private Long userId;

    private String name;

    private String email;

    private String bio;

    private UserRole role;
}
