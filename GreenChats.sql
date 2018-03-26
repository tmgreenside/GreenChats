drop table if exists Posts;
drop table if exists Accounts;

create table Accounts (
	acctID INT PRIMARY KEY AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(30),
	email VARCHAR(30)
);

create table Posts (
	postID INT PRIMARY KEY AUTO_INCREMENT,
	content TEXT,
	acctID INT FOREIGN KEY REFERENCES Accounts (acctID)
);