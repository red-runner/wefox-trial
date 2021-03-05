FROM node:current-alpine as build

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
<<<<<<< HEAD
EXPOSE 8000
=======
EXPOSE 80
>>>>>>> 6430e93... wip
