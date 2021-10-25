# Use an official node image
FROM node:12.20.0

# Set the working directory to /app
WORKDIR /app

# Copy the app from local to container
COPY . .
