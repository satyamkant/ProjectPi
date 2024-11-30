# Use the official Node.js image to build the app.
FROM node:20-slim AS build

# Set working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./

# Install dependencies without unnecessary optional dependencies
RUN npm install --production --legacy-peer-deps

# Copy only the necessary application code (instead of copying everything)
COPY . .

# Build the app.
RUN npm run build

# Use an Nginx image to serve the build files.
FROM nginx:alpine

# Copy build files from the previous stage.
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file (if needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80.
EXPOSE 80

# Start the Nginx server.
CMD ["nginx", "-g", "daemon off;"]