FROM node:18-bookworm

RUN mkdir /webapp
WORKDIR /webapp

COPY . .
RUN npm i

CMD npm run dev