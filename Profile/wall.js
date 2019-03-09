
function getUserContext(req) {
    var userContext = {
        'firstname': req.session.user.first,
        'lastname': req.session.user.last,
    };
    return userContext;
}

exports.displayNewsFeed = function(req, res) {
    var context = getUserContext(req);
    res.render("profile/wall", context);
}
