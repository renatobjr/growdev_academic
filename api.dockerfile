FROM node:18.18.0
WORKDIR /var/www
COPY api .
RUN npm i -g nodemon
CMD [ "npm", "run", "dev" ]
