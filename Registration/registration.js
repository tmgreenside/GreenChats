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
    if (req.body.passEntry1 !== req.body.passEntry2
    || req.body.firstname === "" || req.body.lastname === ""
    || req.body.email === "" ||
    !validate.validateDate(req.body.birthMonth, req.body.birthDay, req.body.birthYear)) {
        res.redirect('/register');
        // LEFT OFF HERE
    }
    else {
        var birthdate =
        var insertion = "INSERT INTO Users VALUES (?, ?, ?, ?, ?)";
        pool.query(insertion, [req.body.email, req.body.firstame,
            req.body.middlename, req.body.lastname, req.body.passEntry1])
    }
    res.redirect('/');
});

module.exports = router;
