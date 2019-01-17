FROM node:latest as react-build

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV NODE_ENV production

COPY . .

RUN npm run build


# Stage 2 - the production environment

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]