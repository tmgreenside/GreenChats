var pool = require('../Database/db');
var blogger = require('./blogger');

function getUserContext(req) {
    var userContext = {
        'firstname': req.session.user.firstname,
        'lastname': req.session.user.lastname,
    };
    return userContext;
}

exports.displayNewsFeed = function(req, res) {
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    var context = getUserContext(req);
    queryPosts = "SELECT u.firstname, u.lastname, u.id, p.* FROM Posts as p, Users as u WHERE Profile IN (SELECT profile1 FROM Friendships WHERE profile2 = ?) OR Profile = ?";
    mediaPosts = "SELECT M.postID, M.type, M.filePath FROM PostMedia as M, Posts as P WHERE M.PostID = P.id AND (P.profile IN (SELECT profile2 FROM Friendships WHERE profile1 = ?) OR P.profile = ?)";
    pool.query(queryPosts, [req.session.user.id, req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            context.resultPosts = result;
            context.user = req.session.user;
            pool.query(mediaPosts, [req.session.user.id, req.session.user.id], function(err, result2) {
                context.resultMedia = result2;
                res.render('profile/wall', context);
            });
        }
    });
}

exports.postWall = function(req, res) {
    blogger.submitPost(req, res, "wall");
}
