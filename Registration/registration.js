var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('registration/index', {"page_name":"Sign Up"});
});

module.exports = router;
