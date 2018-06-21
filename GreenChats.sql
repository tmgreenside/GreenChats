drop schema if exists GreenChats;

create schema GreenChats;

use GreenChats;

drop table if exists Posts;
drop table if exists Accounts;

create table Accounts (
    acctID INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20),
    lastname VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(40)
);

ALTER TABLE Accounts AUTO_INCREMENT=1000001;

create table Posts (
    postID INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    acctID INT,
    FOREIGN KEY (acctID) REFERENCES Accounts (acctID)
);