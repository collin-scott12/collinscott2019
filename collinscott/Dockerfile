# Use parent image
FROM node:9.6.1

# Set the working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copy package.json into the container
COPY ./collinscott/package.json ./usr/src/app/package.json

# install dependencies
RUN npm install

# Copy the current directory contents into the container
# COPY . /collinscott/

# Run the app when the container launches
CMD ["npm", "start"]
