var pool = require('./database');

exports.search = function(req, res) {
    if (!req.session.user) {
        res.redirect('/');
        return;
    }
    var query = req.body.searchEntry;
    res.render("friends.html", { current: query, results: [], message: "Work in progress" });
};