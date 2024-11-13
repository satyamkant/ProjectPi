# Use the official Node.js image to build the app.
FROM node:20 AS build

# Set working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the app.
RUN npm run build

# Use an Nginx image to serve the build files.
FROM nginx:alpine

# Copy build files from the previous stage.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80.
EXPOSE 91

# Start the Nginx server.
CMD ["nginx", "-g", "daemon off;"]