var pool = require('../Database/db');

function getUserContext(req) {
    var userContext = {
        'firstname': req.session.user.first,
        'lastname': req.session.user.last,
    };
    return userContext;
}

exports.displayNewsFeed = function(req, res) {
    var context = getUserContext(req);
    queryPosts = "SELECT * FROM Posts WHERE Profile IN (SELECT profile1 FROM Friendships WHERE profile2 = ?)";
    mediaPosts = "SELECT P.postID, P.type, P.filePath FROM PostMedia as M, Posts as P WHERE P.id = M.PostID AND P.profile IN (SELECT profile2 FROM Friendships WHERE profile1 = ?)";
    pool.query(queryPosts, [req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            pool.query(mediaPosts, [req.session.user.id], function(err, result2) {
                res.send(result);
            });
        }
    });
    res.render("profile/wall", context);
}
