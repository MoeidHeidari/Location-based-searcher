FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG NODE_PORT=8085
ENV NODE_PORT=${NODE_PORT}

ARG PARLOA_LAT=52.493256
ENV PARLOA_LAT=${PARLOA_LAT}

ARG PARLOA_LONG=13.446082
ENV PARLOA_LONG=${PARLOA_LONG}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]