FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm -g install serve

RUN npm install

ENV NODE_ENV production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "build", "-l", "3000" ]