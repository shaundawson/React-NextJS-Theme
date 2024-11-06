# Use the official Node.js image as a base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight web server to serve the built app
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the build files from the builder
COPY --from=builder /app ./

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
