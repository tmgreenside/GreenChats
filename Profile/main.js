var express = require('express');
var login = require('./login.js');
var wall = require('./wall.js');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session.user) {
        res.redirect('/home');
    }
    else {
        res.render("index", {"page_name":"Home", "message":""});
    }
});

router.post('/', login.login);

router.get('/logout', login.logout);

router.get('/wall', wall.displayNewsFeed);

router.post('/wall', wall.postWall);

module.exports = router;
