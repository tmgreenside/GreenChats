var pool = require('../Database/db');

exports.getHomePage = function(req, res) {
    var dataQuery = "SELECT * FROM Users WHERE ID = ?";
    pool.query(dataQuery, [req.session.user.id], function(err, result) {
        var context = {user: result[0]};
        console.log(context);
        res.render('profile/profile', context);
    });
}
