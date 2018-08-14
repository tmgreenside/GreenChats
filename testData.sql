use GreenChats;

insert into Accounts (firstname, lastname, email, birthdate, password, occupation) values ("Trevor", "Greenside", "trevmg7@gmail.com", STR_TO_DATE(?, '%m/%d/%Y'), "pass", "Computer Scientist");
-- select * from Accounts;