package uk.satyampi.onlinecompiler.compilems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.satyampi.onlinecompiler.compilems.dao.CodeExecutionRequest;
import uk.satyampi.onlinecompiler.compilems.dao.ExecutionResult;
import uk.satyampi.onlinecompiler.compilems.service.CodeExecutionService;

@RestController
@RequestMapping("/api/code")
public class CodeExecutionController {

    @Autowired
    private CodeExecutionService codeExecutionService;

    @PostMapping("/execute")
    public ExecutionResult executeCode(@RequestBody CodeExecutionRequest request) {
        return codeExecutionService.executeCode(request.getCode(), request.getLanguage(), request.getInput());
    }
}