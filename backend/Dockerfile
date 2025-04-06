# Use a compatible Node.js version
FROM node:20.11.0-bullseye

# Set working directory
WORKDIR /app

# Copy package files (package.json and package-lock.json)
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy Prisma schema and migrations
COPY prisma ./prisma/

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Start the application
CMD ["npm", "run", "start"]