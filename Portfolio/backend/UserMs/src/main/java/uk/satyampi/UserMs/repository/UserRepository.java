package uk.satyampi.UserMs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.satyampi.UserMs.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<List<User>> findAllByIsActiveFalse();
}
