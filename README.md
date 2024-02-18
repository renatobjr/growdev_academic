
## Badges  
![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)
![Static Badge](https://img.shields.io/badge/Vue-3-42D392)
![Static Badge](https://img.shields.io/badge/Vuetify-3-2767C0)
![Static Badge](https://img.shields.io/badge/Node-16.20.1-056F00)
![Static Badge](https://img.shields.io/badge/Docker_Compose-1.29.2-blue)
![Static Badge](https://img.shields.io/badge/Cypress-13.1.0-197780)


# Growdev Academy

## Description
A Simple add to manage students.

## Run Locally  
Clone the project  

~~~bash  
  git clone https://github.com/renatobjr/growdev_academic
~~~

Go to the project directory  

~~~bash  
  cd growdev_academic
~~~

For fisrt time running the follow teh instructions:

1. Running the api and web npm ci

~~~bash
docker-compose run api npm ci
docker-compose run web npm ci
~~~

2. Start the container:

~~~bash
docker-compose up
~~~

3. Running migratons and seeds:
~~~bash
npm run migrate:docker
npm run seed:docker
~~~

Run Docker  

~~~bash  
docker-compose up 
~~~  


