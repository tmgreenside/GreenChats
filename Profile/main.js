var pool = require('../Database/db');

function showProfile(profileID, req, res) {
    var dataQuery = "SELECT * FROM Users WHERE ID = ?";
    var queryPosts = "SELECT u.firstname, u.lastname, u.id, p.* FROM Posts as p, Users as u WHERE Profile IN (SELECT profile1 FROM Friendships WHERE profile2 = ?) OR Profile = ?";
    var mediaPosts = "SELECT P.postID, P.type, P.filePath FROM PostMedia as M, Posts as P WHERE P.id = M.PostID AND P.profile IN (SELECT profile2 FROM Friendships WHERE profile1 = ?) OR P.profile = ?";
    pool.query(dataQuery, [profileID], function(err, result) {
        var context = {
            user: result[0],
            firstname: req.session.user.first,
            lastname: req.session.user.last,
        };
        pool.query(queryPosts, [profileID, profileID], function(err, result) {
            if (err) {
                res.send(err);
            }
            else {
                context.resultPosts = result;
                pool.query(mediaPosts, [req.session.user.id, req.session.user.id], function(err, result2) {
                    res.render('profile/profile', context);
                });
            }
        });
    });
}

/*
This function calls the showProfile() function so that users can view their
own profile.
*/
exports.getHomePage = function(req, res) {
    showProfile(req.session.user.id, req, res);
}

/*
This function uses the showProfile() function to show another user's
profile.

TO DO: add privacy functionality so that some users can see the whole
profile while others (i.e. non-friends) cannot.
*/
exports.viewProfile = function(req, res) {

}
