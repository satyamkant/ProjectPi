package uk.satyampi.onlinecompiler.compilems.service;

import uk.satyampi.onlinecompiler.compilems.dao.ExecutionResult;

public interface CodeExecutionService {
    ExecutionResult executeCode(String code, String language, String input);
}
