package uk.satyampi.UserMs.aop;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    private final Logger logger = LogManager.getLogger(this.getClass());

    @Before("execution(* uk.satyampi.UserMs.service.impl.UserServiceImpl.registerUser(..))")
    public void beforeRegisterUser(JoinPoint joinPoint) {
        logger.info("Before Registering User");
    }

    @After("execution(* uk.satyampi.UserMs.service.impl.UserServiceImpl.registerUser(..))")
    public void afterRegisterUser(JoinPoint joinPoint) {
        logger.info("After Registering User");
    }
}
