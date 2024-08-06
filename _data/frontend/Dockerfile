# Use the official Node.js image
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
