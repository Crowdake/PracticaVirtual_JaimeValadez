FROM node

WORKDIR /nodeapp

COPY package.json .
RUN npm install

COPY . .
CMD npm start

# docker build -t nodeapp .