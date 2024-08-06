# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the frontend app.
RUN npm run build

# Serve the app (assuming a typical setup with serve).
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port the app runs on.
EXPOSE 3000
