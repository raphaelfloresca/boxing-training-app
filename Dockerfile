# Use the official Node.js image as a base
FROM node:latest

# Set build arguments
ARG BUILD_ENV=production

# Set environment variables
ENV BUILD_ENV=${BUILD_ENV}
ENV NODE_ENV=${BUILD_ENV}

# Create and change to the app directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies based on the build environment
RUN if [ "$BUILD_ENV" = "production" ]; then \
        npm ci --only=production; \
    else \
        npm install; \
    fi

# Copy the rest of the application code
COPY . .

# Build the Next.js app for production if in production mode
RUN if [ "$BUILD_ENV" = "production" ]; then \
        npm run build; \
    fi

# Expose port 3000
EXPOSE 3000

# Default command based on the build environment
CMD if [ "$BUILD_ENV" = "production" ]; then \
        npm start; \
    else \
        npm run dev; \
    fi
