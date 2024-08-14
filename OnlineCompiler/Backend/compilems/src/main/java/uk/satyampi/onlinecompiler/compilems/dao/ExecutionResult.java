package uk.satyampi.onlinecompiler.compilems.dao;

public class ExecutionResult {
    private final String output;
    private final String error;
    private final long executionTime;

    // Constructors, getters, and setters
    public ExecutionResult(String output, String error, long executionTime) {
        this.output = output;
        this.error = error;
        this.executionTime = executionTime;
    }

    public String getOutput() {
        return output;
    }

    public String getError() {
        return error;
    }

    public long getExecutionTime() {
        return executionTime;
    }
}
