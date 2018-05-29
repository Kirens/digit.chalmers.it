FROM node:9.1.0

WORKDIR /docker/frontend

COPY /WebIT/frontend/package.json /docker/frontend
RUN npm install

# Move WebIT stuff
COPY /WebIT/frontend /docker/frontend

# Move extending project stuff
COPY . /docker/
RUN rm -rf ../WebIT
RUN ln -sf /docker/frontend/.babelrc /docker/.babelrc
RUN ln -sf /docker/frontend/node_modules /docker/node_modules

CMD npm run dev

EXPOSE 8080
