var pool = require('../Database/db');

exports.search = function(req, res) {
    var params = req.body.searchParams.split(' ');
    console.log(params);
    res.send("Work in progress");
}
