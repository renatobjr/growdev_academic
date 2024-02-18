FROM node:18.18.0
WORKDIR /var/www
COPY web .
CMD [ "npm", "run", "dev" ]
