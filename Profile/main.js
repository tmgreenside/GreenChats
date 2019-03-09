var express = require('express');
var login = require('./login.js');
var wall = require('./wall.js');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session.user) {
        wall.displayNewsFeed(req, res);
    }
    else {
        res.render("index", {"page_name":"Home", "message":""});
    }
});

router.post('/', login.login);

router.get('/logout', login.logout);

module.exports = router;