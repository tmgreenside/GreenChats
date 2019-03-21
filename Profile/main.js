var pool = require('../Database/db');

exports.getHomePage = function(req, res) {
    var context = {user: req.session.user};
    console.log(context);
    res.render('profile/profile', context);
}
