var express = require('express');
var login = require('./login.js');
var wall = require('./wall.js');
var main = require('./main.js');
var search = require('./search.js');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session.user) {
        res.redirect('/wall');
    }
    else {
        res.render("index", {"page_name":"Home", "message":""});
    }
});

router.post('/', login.login);

router.get('/logout', login.logout);

router.get('/wall', wall.displayNewsFeed);

router.post('/wall', wall.postWall);

router.get('/home', main.getHomePage);

router.post('/home', main.postFromHome);

router.post('/searchFriends', search.search);

module.exports = router;
