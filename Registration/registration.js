var express = require('express');
var pool = require('../Database/db');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('registration/index', {"page_name":"Sign Up"});
});

router.post('/', function(req, res) {
    
    res.redirect('/');
});

module.exports = router;
