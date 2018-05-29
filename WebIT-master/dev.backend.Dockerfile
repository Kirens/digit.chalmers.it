FROM node:latest

RUN mkdir -p /backend_dev
RUN cd /backend_dev

COPY /backend/package.json /backend_dev/package.json
WORKDIR /backend_dev

RUN npm install
RUN npm install nodemon -g --silent

COPY /backend /backend_dev

CMD nodemon -L server/main.js
