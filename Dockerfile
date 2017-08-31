FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install nodemon globally
RUN npm install -g nodemon && \
	npm install -g mocha

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Move all our files to the work dir
COPY . /usr/src/app

EXPOSE 80



# In the terminal run our server

# Normal instantiate of the server
# CMD ["npm", "start"]

# Server instantiated with nodemon to auto capture project changes
# CMD ["nodemon", "server.js"]

# Checks for updates to source then refreshes the server automatically (SLOW because it iterates over all file for changes)
CMD ["nodemon", "-L", "./bin/www"]
