drop schema if exists GreenChats;

create schema GreenChats;

use GreenChats;

create table Accounts (
    acctID INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20),
    lastname VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(40),
    birthdate DATE,
    occupation VARCHAR(50),
    rel_status VARCHAR(30)
);

ALTER TABLE Accounts AUTO_INCREMENT=10001;

create table Posts (
    postID INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT,
    acctID INT,
    postDate DATETIME,
    FOREIGN KEY (acctID) REFERENCES Accounts (acctID)
);

create table Following (
    acct1 INT,
    acct2 INT,
    foreign key (acct1) references Accounts (acctID),
    foreign key (acct2) references Accounts (acctID)
);

create table Requests (
    sender INT,
    receiver INT,
    foreign key (sender) references Accounts (acctID),
    foreign key (receiver) references Accounts (acctID) 
);

create table PostTags (
    postID INT,
    acctID INT,
    foreign key (postID) references Posts (postID),
    foreign key (acctID) references Accounts (acctID)
);

create table Relationships (
    acct1 INT,
    acct2 INT,
    nature VARCHAR(25),
    foreign key (acct1) references Accounts (acctID),
    foreign key (acct2) references Accounts (acctID)
);