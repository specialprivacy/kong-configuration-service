FROM node:12.18.1


COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh


COPY config.js /config.js
COPY init-kong.js /init-kong.js
COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm install
