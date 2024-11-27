package uk.satyampi.UserMs.aop;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import uk.satyampi.UserMs.exception.SatyamPiLogicalException;

@RestControllerAdvice
public class ControllerAdviceHandler {

    @ExceptionHandler(SatyamPiLogicalException.class)
    public ResponseEntity<String> exception(SatyamPiLogicalException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
