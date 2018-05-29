FROM node:9.1.0

WORKDIR /frontend

COPY . /frontend
RUN npm install
CMD npm run prod

EXPOSE 8080
