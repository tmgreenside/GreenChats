var pool = require('./database');

exports.show = function(req, res) {
    search = "SELECT firstname, lastname, content, postDate from Posts, Accounts, Following ";
    search += "WHERE acctID = ? ORDER BY postDate";
    pool.query();
};