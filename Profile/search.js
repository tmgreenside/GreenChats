var pool = require('../Database/db');

// TO DO: order by mutual friends or relevance
exports.search = function(req, res) {
    var params = req.body.searchParams.split(' ');
    var searchQuery = "SELECT firstname, lastname, id FROM Users WHERE firstname IN ('" + params.join(',') + "')";
    searchQuery += " OR lastname IN ('" + params.join(',') + "')";
    searchQuery += " LIMIT 20";
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
