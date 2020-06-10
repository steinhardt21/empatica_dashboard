/**Specification for the creation of the database for Postgress**/
CREATE DATABASE emapticadb;

CREATE TABLE download(
    app_id SERIAL PRIMARY KEY,
    longitude FLOAT,
    latitude FLOAT,
    downloaded_at TIME
);


CREATE DATABASE userapp;

CREATE TABLE download(
    app_id SERIAL PRIMARY KEY,
    Name FLOAT
);

INSERT INTO download(longitude,latitude,downloaded_at) VALUES (-0.127758, 51.507351, '17:40:00');
INSERT INTO download(longitude,latitude,downloaded_at) VALUES (9.189982, 45.464203, '07:40:45');
INSERT INTO download(longitude,latitude,downloaded_at) VALUES (121.473701, 31.230391,'19:40:12');
INSERT INTO download(longitude,latitude,downloaded_at) VALUES (-71.058884, 42.360081, '22:20):11');
