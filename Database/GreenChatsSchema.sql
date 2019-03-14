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
    gender VARCHAR(7),
    password VARCHAR(100) NOT NULL
);

create table Posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    postText MEDIUMTEXT,
    profile INT,
    postTime TIMESTAMP,
    FOREIGN KEY (profile) REFERENCES Users (id)
);

create table PostMedia (
    postID INT,
    type VARCHAR(5),
    filePath VARCHAR(4096),
    FOREIGN KEY (postID) REFERENCES Posts (id)
);

create table Friendships (
    profile1 INT,
    profile2 INT,
    FOREIGN KEY (profile1) REFERENCES Users (id),
    FOREIGN KEY (profile2) REFERENCES Users (id)
);

create table FriendRequests (
    sender INT,
    recipient INT,
    FOREIGN KEY (sender) REFERENCES Users (id),
    FOREIGN KEY (recipient) REFERENCES Users (id)
);
