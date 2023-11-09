
# How to Run React Project

# Step 1 : Install project dependencies:
 Run the following command to install the project dependencies: `npm install`

# Step 2 : Running the Project with Docker
step 1 : Build a Docker image for the project using the following command. `docker build -t news-app.`

step 2 : Run the Docker Container using this command: `docker run -p 8080:3000 news-app`

step 3 : Access the React App
Open a web browser and navigate to the following URL to view your React app running inside the Docker container:
[http://localhost:8080](http://localhost:8080)


# Step 3 : Stopping the Docker Container

1. To stop the Docker container, use the following command: `docker stop <container-id>`
2.After stopping the container, you can remove it with the following command: `docker rm <container-id>`