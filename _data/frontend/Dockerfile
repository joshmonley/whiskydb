# Dockerfile

# Use an official node image as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Use an official nginx image as a parent image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80
EXPOSE 3000

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
