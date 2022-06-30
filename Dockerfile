FROM node:16-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=build /app/dist/pokemon-app /usr/share/nginx/html

EXPOSE 80
