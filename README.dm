## Emaptica Dashboard

### Overview of the problem
Create a web dashboard that can be used internally to show a real time overview of the mobile apps download. 

Each download is an object that has this properties:
* longitude
* latitude
* app_id (an internal identifier for the app, like IOS_ALERT or IOS_MATE)
* downloaded_at

For the current solution is assumed that "download" object is sent from the user's device to Empatica's server at moment of the instalation of the app with
te app_id that is unique.



