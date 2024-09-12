package uk.satyampi.onlinecompiler.compilems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uk.satyampi.onlinecompiler.compilems.dao.CodeExecutionRequest;
import uk.satyampi.onlinecompiler.compilems.dao.ExecutionResult;
import uk.satyampi.onlinecompiler.compilems.service.CodeExecutionService;

@RestController
@RequestMapping("/api/code")

public class CodeExecutionController {

    @Autowired
    private CodeExecutionService codeExecutionService;

    @PostMapping("/execute")
    @CrossOrigin(origins = "*")
    public ExecutionResult executeCode(@RequestBody CodeExecutionRequest request) {
        return codeExecutionService.executeCode(request.getCode(), request.getLanguage(), request.getInput());
    }
}
