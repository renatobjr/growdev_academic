
## Badges  
![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)
![Static Badge](https://img.shields.io/badge/Vue-3-42D392)
![Static Badge](https://img.shields.io/badge/Vuetify-3-2767C0)
![Static Badge](https://img.shields.io/badge/Node-16.20.1-056F00)
![Static Badge](https://img.shields.io/badge/Docker_Compose-1.29.2-blue)
![Static Badge](https://img.shields.io/badge/Jest-323330)


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

For fisrt time running the follow the instructions:

1. Running the api and web npm ci

~~~bash
docker-compose run api npm ci
docker-compose run web npm ci
~~~

2. Start the container:

~~~bash
docker-compose up
~~~

3. Running migratons and seeds on api/:
~~~bash
npm run migrate:docker
npm run seed:docker
~~~

Next times:  

~~~bash  
docker-compose up 
~~~

For running test follow the instructions:

1. Rename the NODE_ENV to "test"
~~~bash  
NODE_ENV=test 
~~~

2. Follow the same commands about up a dockcer container for the first time

3. Running the follow command:
~~~bash
npm run test
~~~

## Tips:
1. The main user account wiil be create after running the seeds, look at the database for mor info. The passowrd it's equal to username.
2. After running seeds also will be imported 4 users.

