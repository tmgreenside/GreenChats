# GreenChats

This is a blogging application with which I intend to experiment
with secure web design methods. This project will allow users to create
personal pages and share information, such as blog posts, photos, videos,
and other data.

### Admin (not started)
This section will contain functions for an administrator to review materials on
standard accounts, including a section to delete or alter data.

### Accounts (in progress)
This directory contains routing and handlers for managing accounts, such as
editing information and deleting an account.

### Database
This directory contains the module for creating and maintaining a single
connection to the database, which is then exported to the other modules. This
also contains the schema definition for the application.
* In deployment, an administrator will have to create a file called
'credentials.js' that contains a javascript object with authentication
information to sign in to the database.

### Profile
This contains login functionality and functions for retrieving blogging data
and posts, and displaying them in the appropriate views.

### Registration
This directory contains functionality for creating an account. Future: may be merged
with the Accounts directory.

### To Do:

* Implement functionality for creating a page, adding friends, and sharing
data through the site.
* Learn to properly store session values server side.
* Test this new version of the site against OWASP Top 10 one by one.
* Learn to encrypt passwords.
* Hack this site in as many ways as I can learn.
* Deploy on a collection of servers.
* Learn to use NGINX for load balancing.
