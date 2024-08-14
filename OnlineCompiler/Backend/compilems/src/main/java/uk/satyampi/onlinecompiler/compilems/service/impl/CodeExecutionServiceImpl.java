package uk.satyampi.onlinecompiler.compilems.service.impl;

import org.springframework.stereotype.Service;
import uk.satyampi.onlinecompiler.compilems.dao.ExecutionResult;
import uk.satyampi.onlinecompiler.compilems.service.CodeExecutionService;
import java.io.*;

@Service
public class CodeExecutionServiceImpl implements CodeExecutionService {

    @Override
    public ExecutionResult executeCode(String code, String language, String input) {
        // Generate a unique temporary file name
        String fileName = "temp_" + System.currentTimeMillis() + getFileExtension(language);

        // Write the code to the file
        writeCodeToFile(code, fileName);

        // Construct the command for execution
        String command = getCommandForLanguage(language, fileName);
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("bash", "-c", command);

        StringBuilder output = new StringBuilder();
        StringBuilder error = new StringBuilder();
        long startTime = System.currentTimeMillis();

        try {
            Process process = processBuilder.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));

            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }
            while ((line = errorReader.readLine()) != null) {
                error.append(line).append("\n");
            }

            process.waitFor();
        } catch (Exception e) {
            error.append("Error executing code: ").append(e.getMessage());
        }

        long executionTime = System.currentTimeMillis() - startTime;

        // Optionally, delete the file after execution
        deleteFile(fileName);

        return new ExecutionResult(output.toString(), error.toString(), executionTime);
    }

    private void writeCodeToFile(String code, String fileName) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write(code);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String getFileExtension(String language) {
        return switch (language.toLowerCase()) {
            case "python" -> ".py";
            case "java" -> ".java";
            case "cpp" -> ".cpp";
            // Add more languages as needed
            default -> throw new UnsupportedOperationException("Language not supported: " + language);
        };
    }

    private void deleteFile(String fileName) {
        File file = new File(fileName);
        if (file.exists()) {
            file.delete();
        }
    }

    private String getCommandForLanguage(String language, String fileName) {

        return switch (language.toLowerCase()) {
            case "python" -> "python3 " + fileName;
            case "java" -> {
                String className = fileName.replace(".java", "");
                yield "javac " + fileName + " && java " + className;
            }
            case "cpp" -> "g++ " + fileName + " -o temp && ./temp";
            // Add more languages as needed
            default -> throw new UnsupportedOperationException("Language not supported: " + language);
        };
    }
}