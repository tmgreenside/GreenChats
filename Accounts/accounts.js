var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('account/info', {"page_name":"Info"});
});

module.exports = router;
