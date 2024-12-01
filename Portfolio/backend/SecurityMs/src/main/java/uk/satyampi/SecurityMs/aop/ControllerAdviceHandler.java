package uk.satyampi.SecurityMs.aop;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import uk.satyampi.SecurityMs.exception.SatyamPiLogicalException;

@RestControllerAdvice
public class ControllerAdviceHandler {
    @ExceptionHandler(SatyamPiLogicalException.class)
    public ResponseEntity<String> exception(SatyamPiLogicalException e) {
        if(e.getMessage().equals("Http exception"))
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        else if(e.getMessage().equals("Server not available")){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        }else
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
