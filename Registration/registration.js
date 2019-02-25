var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('registration/index');
});

module.exports = router;
