# start with Alpine Linux Node image for development
FROM node:14.16.0-alpine as react-boilerplate

ARG APP_PATH="/react-boilerplate"
ARG NODE_ENV="development"
ARG PORT="3000"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    PORT="${PORT}"

# Project code
COPY . ${APP_PATH}/

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install

# expose standard Node.js port of 3000
# EXPOSE ${PORT}

# NOTE: change CMD to be command to start node app
CMD ["npm", "start"]