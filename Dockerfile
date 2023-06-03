FROM node:18.16.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm ci
RUN npm cache clean --force

COPY . .

CMD ["npm", "run", "dev"]
