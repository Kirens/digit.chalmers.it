FROM nginx:1.13.7-alpine AS productionStage

WORKDIR /app

COPY /app /app

COPY --from=buildStage /app /usr/share/nginx/html
