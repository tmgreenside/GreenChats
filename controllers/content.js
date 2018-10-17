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
    var post = req.body.blogger.replace(/(?:\r\n|\r|\n)/g, '&#13;&#10;');
    insertQuery = "INSERT INTO Posts (content, acctID, postDate) VALUES (?, ?,NOW())";
    pool.query(insertQuery, [post, req.session.user.id], function(err, result) {
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
    query1 = "SELECT * FROM Posts WHERE acctID = ?";
    pool.query(query1, [req.session.user.id], function(err, result) {
        if (err )
            res.redirect('/error');
        else {
            resultPosts = result;
            query2 = "SELECT firstname, lastname FROM Following f, Accounts a WHERE f.acct1 = ? AND a.acctID = f.acct2";
            pool.query(query2, [req.session.user.id], function(err, result) { 
                
                // TO DO: third query for user info section
                // query3 = "SELECT ";
                
                res.render('profile.html', {
                    firstname: req.session.user.first,
                    lastname: req.session.user.last,
                    posts: resultPosts,
                    friends: result,
                    birth: req.session.user.birth
                });
            });
        }
    });
};

exports.editProfile = function(req, res) {
    res.send("In progress");
};