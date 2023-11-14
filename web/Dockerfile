FROM node:18
WORKDIR /usr/src/app
COPY node_modules ./
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000