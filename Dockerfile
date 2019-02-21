# Setup and build the client
FROM node:10-alpine as client
WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build

# Setup the server
FROM node:10-alpine
WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/api/
COPY api/package*.json ./
RUN npm install -qy
COPY api/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]
