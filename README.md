## Docker on prod environment

on this environment we will use Dockerfile.dev

this will map the container to the working directory(PWD) and access the data volume inside your own PC

## docker run -it -p 3000:3000 -v app/node_modules -v ${PWD}:/app CONTAINERID

this means that it should not map the node modules from the container to the working directory.

## -v app/node_modules

in this dev enironment we are using a reference to our own volume ,and with

## "start": "WATCHPACK_POLLING=true react-scripts start",

we are watching for the changes in our project, which reference is being passed to container working directory using this command

## ${PWD}:/app

beside that we have a docker compose for the dev enironment, to use it use:

## docker-compose up

or to rebuild that image

## docker-compose up --build

---

## Docker on prod environment

for that we use regular docker file, to use it:

## docker build .

take the image id and run it with

## docker run -it -p 8080:80 IMAGE_ID
