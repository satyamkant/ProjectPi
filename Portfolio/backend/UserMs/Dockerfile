# Use the official OpenJDK 23 image as a base image
FROM openjdk:17-jdk-slim as build

# Set working directory in the container
WORKDIR /app

# Copy the pom.xml and other necessary files
COPY pom.xml ./

# Copy the Maven wrapper files
COPY .mvn .mvn
COPY mvnw ./


# Download dependencies (This step caches dependencies if the pom.xml hasn't changed)
RUN ./mvnw dependency:go-offline

# Copy the entire application source code
COPY src ./src

# Build the Spring Boot application using Maven (You can also use ./mvnw if Maven Wrapper is used)
RUN ./mvnw clean package

# Use a minimal JRE image for running the application
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/UserMs-0.0.1-SNAPSHOT.jar /app/UserMs.jar

# Expose the port the application will run on (adjust according to your app's port)
EXPOSE 2003

# Run the application
CMD ["java", "-jar", "/app/UserMs.jar"]