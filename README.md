# Empatica Dashboard

## Overview of the problem
Create a web dashboard that can be used internally in Empatica to show a real time overview of the mobile apps download. 

Each download is an object that has these properties:
* longitude
* latitude
* app_id (an internal identifier for the app, like IOS_ALERT or IOS_MATE)
* downloaded_at

For the current solution is assumed that "download" object is sent from the user's device to Empatica's server at moment of the installation of the app with
the app_id that is unique.

## Description of the solution 

The stack adopted was the following:
* Next.js for UI development (framework for building  server-rendered React applications)
* GraphQL and NodeJS for the backend, in particular in the client-server architecture, 'Apollo client' in client side and 'apollo-server-express' on server side
* Postgress for the database, where each download object is saved as an arrow on the table "download"

In the following image a graphical rappresentation of the solution:

![alt text](https://miro.medium.com/max/1400/1*e_aSlU1ydbIw0bZhZ9T5eA.png)

## HOW TO RUN THE PROJECT

Note: in order to speed up the testing, in the project it was implemented also a fake JSON server to contain the download objects as JSON and to avoid to create a postgress database locally.

1. [Run the fake JSON server] open a command  line window, go on the project and write: yarn run json:server --port 3002 
2. [Run the GraphQL server] open another command  line window, go on the project and write: npm run dev:server
   This will run the server on http://localhost:5000/
3. [Run the Client] open another command  line window, go on the 'Client' folder and write: npm run dev 
   This will run the client on http://localhost:3000/
   
By opening on the browser http://localhost:3000/ it will be seen:

![alt text](https://github.com/steinhardt21/empatica_dashboard/blob/master/empatica_dashboard.JPG)

##### Note
For the sake of learning new technologies, for this project I studied for the first time GraphQL and the framework Next.js (for server-rendered React applications), beside the fact of going deeper in understand React.



