var pool = require('./database');
var request = require('ajax-request');

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
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    var id = req.query['id'];
    query1 = "SELECT * FROM Posts WHERE acctID = ?";
    pool.query(query1, [id], function(err, result) {
        if (err )
            res.redirect('/error');
        else {
            resultPosts = result;
            query2 = "SELECT firstname, lastname FROM Following f, Accounts a WHERE f.acct1 = ? AND a.acctID = f.acct2";
            pool.query(query2, [id], function(err, result) {
                resultFriends = result;
                // TO DO: third query for user info section
                query3 = "SELECT * from Accounts WHERE acctID = ?";
                pool.query(query3, [id], function(err, result) {
                    res.render('profile.html', {
                        firstname: result[0]['firstname'],
                        lastname: result[0]['lastname'],
                        posts: resultPosts,
                        friends: resultFriends,
                        birth: result[0]['birthdate']
                    });
                });
            });
        }
    });
};
