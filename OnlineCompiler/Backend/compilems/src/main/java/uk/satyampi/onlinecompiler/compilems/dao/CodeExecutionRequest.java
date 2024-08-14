package uk.satyampi.onlinecompiler.compilems.dao;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CodeExecutionRequest {
    // Getters and setters
    private String code;
    private String language;
    private String input;

    // Constructors
    public CodeExecutionRequest() {}

    public CodeExecutionRequest(String code, String language, String input) {
        this.code = code;
        this.language = language;
        this.input = input;
    }

}