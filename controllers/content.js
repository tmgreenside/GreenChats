var pool = require('./database');

exports.show = function(req, res) {
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    search = "SELECT DISTINCT a.firstname, a.lastname, p.content, p.postDate from Posts p,\n\
    Accounts a, Following f WHERE (f.acct1 = ? AND a.acctID = f.acct2 AND\n\
    p.acctID = f.acct2) or (p.acctID = ? and a.acctID = ?) ORDER BY p.postDate LIMIT 500";
    pool.query(search, [req.session.user.id, req.session.user.id, req.session.user.id], function(err, result) {
        if (err) {
            res.redirect('/error');
            console.log(err);
        } else {
            var first = req.session.user.first;
            res.render('wall.html', {firstname: first, posts: result});
        }
    });
};

exports.postSubmit = function(req, res) {
    insertQuery = "INSERT INTO Posts (content, acctID, postDate) VALUES (?, ?,\n\
    NOW())";
    pool.query(insertQuery, [req.body.blogger, req.session.user.id], function(err, result) {
        if (err || result.length === 0)
            res.redirect('/error');
        else {
            res.redirect('/home');
        }
    });
};

exports.showProfile = function(req, res) {
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    
};