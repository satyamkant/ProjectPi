# Use the official Node.js image.
FROM node:20 AS build

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the React app.
RUN npm run build

# Use a lightweight web server to serve the build files.
FROM nginx:alpine

# Copy the build files from the previous stage.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80.
EXPOSE 80

# Start the Nginx server.
CMD ["nginx", "-g", "daemon off;"]