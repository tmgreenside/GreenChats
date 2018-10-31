/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var pool = require('./database');

exports.searchProfiles = function(req, res) {
    var search = "SELECT firstname, lastname, acctID FROM Accounts WHERE firstname LIKE ? OR lastname LIKE ?"
    pool.query(search, [])
};
