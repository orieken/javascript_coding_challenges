FROM node:4.5.0

RUN apt-get update
RUN apt-get -y install build-essential chrpath libssl-dev libxft-dev
RUN apt-get -y install libfreetype6 libfreetype6-dev
RUN apt-get -y install libfontconfig1 libfontconfig1-dev
RUN npm install -g gulp karma-cli jasmine-core bower node-sass phantomjs-prebuilt
RUN npm install -g angular-cli typescript



RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY bower.json /usr/src/app
COPY .bowerrc /usr/src/app
RUN npm install
RUN bower install
COPY . /usr/src/app

EXPOSE 3000 3001
