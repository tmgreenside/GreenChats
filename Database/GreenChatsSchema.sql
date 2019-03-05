DROP SCHEMA IF EXISTS GreenChats;

CREATE SCHEMA GreenChats;

use GreenChats;

create table Users (
    email VARCHAR(100) PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    middleName VARCHAR(50),
    lastname VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    password VARCHAR(100)
);
