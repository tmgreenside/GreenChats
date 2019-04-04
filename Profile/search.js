var pool = require('../Database/db');

exports.search = function(req, res) {
    var params = req.body.searchParams.split(' ');
    var searchQuery = "SELECT firstname, lastname, id FROM Users WHERE firstname IN ('" + params.join(',') + "')";
    searchQuery += " OR lastname IN ('" + params.join(',') + "')";
    console.log(searchQuery);
    pool.query(searchQuery, function(err, result) {
        if (err) {
            res.send("No results.");
        }
        else {
            console.log(result);
            if (result.length < 1) {
                res.send("No results.");
            } else {
                res.send(result);
            }
        }
    });
}
