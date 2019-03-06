var express = require('express');
var pool = require('../Database/db');
var validate = require('./validate');

var router = express.Router();

function getDateString(month, day, year) {

}

router.get('/', function(req, res) {
    res.render('registration/index', {"page_name":"Sign Up"});
});

router.post('/', function(req, res) {
    if (validate.checkRegisterData(req.body) === false) {
        res.redirect('/register');
    }
    else {
        var birthdate = validate.parseDate(req.body);
        var insertion = "INSERT INTO Users (email, firstname, middlename, lastname, birthdate, password) VALUES (?, ?, ?, ?, STR_TO_DATE(?, '%m-%d-%Y'), ?)";
        pool.query(insertion, [req.body.email, req.body.firstname,
            req.body.middlename, req.body.lastname, birthdate, req.body.passEntry1],
            function(err, result) {
                if (err) {
                    res.send("Error: " + err);
                }
                else {
                    res.redirect('/');
                }
            });
    }
});

module.exports = router;
