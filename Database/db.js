var mysql = require('mysql');
var fs = require('fs');

// This file needs to be created for deployment.
var credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

var pool = mysql.createPool(credentials);

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
