var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'trevapp',
    password: 'bowers321',
    database: 'GreenChats'
});

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