var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('account/info', {"page_name":"Info"});
});

router.get('/edit', function(req, res) {
    res.send("Edit Info will be here soon.");
});

module.exports = router;
