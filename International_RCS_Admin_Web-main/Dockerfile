
FROM node:alpine

#This is for WEB
WORKDIR /adminweb


# Copy package.json and package-lock.json (if available)
COPY Admin-Web/package*.json /adminweb/


# Install all dependencies
RUN npm install --force

# Copy the project files into the Docker image
COPY Admin-Web/dist/rcs-admin/. /adminweb
COPY Admin-Web/rcs_index.js /adminweb

# Expose port 3005
EXPOSE 3005:3005

# Run app.js when the container launches
CMD ["node", "rcs_index.js"]

