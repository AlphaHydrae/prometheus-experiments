FROM node:6.9
MAINTAINER Simon Oulevay (Alpha Hydrae) <docker@alphahydrae.com>

ADD package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install

ADD index.js /usr/src/app/

CMD [ "npm", "start" ]
