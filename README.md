# Emaptica Dashboard

## Overview of the problem
Create a web dashboard that can be used internally to show a real time overview of the mobile apps download. 

Each download is an object that has this properties:
* longitude
* latitude
* app_id (an internal identifier for the app, like IOS_ALERT or IOS_MATE)
* downloaded_at

For the current solution is assumed that "download" object is sent from the user's device to Empatica's server at moment of the instalation of the app with
te app_id that is unique.

## Description of the solution 

The stack adopted was the following:
* Next.js for UI development (framework for building  server-rendered React applications)
* GraphQL and NodeJS for the backend
* Postgress for the database

In particular, due the adoption of GraphQL it was used in the client-server architecture, Apollo client in client side and apollo-server-express on server side.

In the following image a graphical rappresentation of the solution:

![alt text](https://miro.medium.com/max/1400/1*e_aSlU1ydbIw0bZhZ9T5eA.png)




##### Note
For the sake of learning new technologies, for this project I studied for the first time GraphQL and the framework Next.js (for server-rendered React applications), beside the fact of going depper in understand React.



