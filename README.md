# react-boilerplate
React typescript boilerplate
   - Boilerplate which provides required dependency only instead of loads of    stuff which create-react-app uses to creates react app.
   - Idea is to privode basic required skeleton with minimal packages to get started.
Following packages were used while creating this app.
   - Material UI - Provides array of different comoponent which we can use and quickl build the app. You can use other alternatives as well such as AntDesign or react bootstrap 
   - React Router - For Navigation
   - Saas-load - css preprocessor
Dev dependency
   - I'm using standard.js as dev dependency for linting you can change according to your requirement tslint or other.
   - Webapack server 

How to run application.
   - npm install
   - npm start
   - Created dockerfile and docker compose file as well in case you would like to run through it. Steps for running through docker
      - docker-compose build --no-cache
      - docker-compose up
    