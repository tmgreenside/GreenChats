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
    password VARCHAR(100),
    gender VARCHAR(7)
);

create table Posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    postText MEDIUMTEXT,
    profile INT,
    FOREIGN KEY (profile) REFERENCES Users (id)
);

create table PostMedia (
    postID INT,
    path VARCHAR(4096),
    FOREIGN KEY postID REFERENCES Posts(id)
)
