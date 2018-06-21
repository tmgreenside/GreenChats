/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'trevapp',
    password: 'bowers321',
    database: 'GreenChats'
});

function login(userenter, hashed_pw) {
    statement = "select * from Accounts where email = ? and password = ?";
    connection.query(statement, [userenter, hashed_pw], function (err, result) {
        if (err || result.length === 0)
            return "";
        else {
            return result;
        }
    });
}