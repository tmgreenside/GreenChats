var pool = require('../Database/db');

function showProfile(profileID, req, res) {
    var dataQuery = "SELECT * FROM Users WHERE ID = ?";
    pool.query(dataQuery, [profileID], function(err, result) {
        var context = {user: result[0]};
        console.log(context);
        res.render('profile/profile', context);
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
