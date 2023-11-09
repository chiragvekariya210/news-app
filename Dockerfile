# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
