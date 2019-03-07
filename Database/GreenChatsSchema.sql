DROP SCHEMA IF EXISTS GreenChats;

CREATE SCHEMA GreenChats;

use GreenChats;

create table Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    middlename VARCHAR(50),
    lastname VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    password VARCHAR(100)
);
