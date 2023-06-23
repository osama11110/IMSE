# Use Node.js version 18

FROM node:18.16.0

# Navigate to the directory
WORKDIR /app

# Copy the packages files
COPY package*.json /

# Install dependencies
RUN npm install

# Copy all the files
COPY . . 

# Expose the port that the Node.js is listening on
EXPOSE 3000

# Run the application
CMD ["node", "./src/index.js"]