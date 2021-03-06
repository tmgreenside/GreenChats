var pool = require('../Database/db');
var blogger = require('./blogger');

function showProfile(profileID, req, res) {
    var dataQuery = "SELECT * FROM Users WHERE ID = ?";
    var queryPosts = "SELECT u.firstname, u.lastname, u.id, p.* FROM Posts as p, Users as u WHERE Profile IN (SELECT profile1 FROM Friendships WHERE profile2 = ?) OR Profile = ?";
    var mediaPosts = "SELECT M.postID, M.type, M.filePath FROM PostMedia as M, Posts as P WHERE M.PostID = P.id AND P.profile = ?";
    var queryFriends = "SELECT U.firstname, U.lastname, U.id FROM Users as U, Friendships as F WHERE U.id = F.profile1 AND F.profile2 = ?";
    pool.query(dataQuery, [profileID], function(err, result) {
        var context = {
            user: result[0],
            firstname: req.session.user.firstname,
            lastname: req.session.user.lastname,
        };
        pool.query(queryPosts, [profileID, profileID], function(err, result) {
            if (err) {
                res.send(err);
            }
            else {
                context.resultPosts = result;
                pool.query(mediaPosts, [req.session.user.id, req.session.user.id], function(err, result) {
                    context.resultMedia = result;
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

exports.postFromHome = function(req, res) {
    blogger.submitPost(req, res, "home");
}

/*
This function uses the showProfile() function to show another user's
profile.

TO DO: add privacy functionality so that some users can see the whole
profile while others (i.e. non-friends) cannot.
*/
exports.viewProfile = function(req, res) {
    showProfile(req.query.id, req, res);
}
