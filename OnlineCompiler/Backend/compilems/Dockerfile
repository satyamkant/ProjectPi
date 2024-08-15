FROM openjdk:17

# Install g++ and any other necessary tools, then remove the package manager cache
RUN apt-get update && apt-get install -y g++ \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ADD target/compilems.jar compilems.jar
EXPOSE 1020
ENTRYPOINT ["java","-jar","/compilems.jar"]