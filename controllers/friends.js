var pool = require('./database');

exports.search = function(req, res) {
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    var queryFirst = req.body.searchFirst;
    var queryLast = req.body.searchLast;
    var fullQuery = "SELECT acctID, firstname, lastname from Accounts where firstname like ? or lastname like ?";
    pool.query(fullQuery, [queryFirst, queryLast], function(err, result) {
        if (err) {
            res.redirect('/error');
            console.log(err);
            return;
        }
        res.render("friends.html", { currentFirst: queryFirst, currentLast: queryLast, results: result, message: "" });
    });
};

exports.viewProfile = function(req, res) {
    
};