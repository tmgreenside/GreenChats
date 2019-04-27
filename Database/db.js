var mysql = require('mysql');
var fs = require('fs');

var credentials = require('./credentials.js');

// This file needs to be created for deployment.
var login = credentials.db;

var pool = mysql.createPool(login);

// Attempt to catch disconnects
pool.on('connection', function (connection) {
    console.log('DB Connection established');

    connection.on('error', function (err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
        console.error(new Date(), 'MySQL close', err);
    });
});

module.exports = pool;
