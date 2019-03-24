var pool = require('../Database/db');

exports.login = function(req, res) {
    var emailEntry = req.body.emailEntry;
    var passEntry = req.body.passEntry;
    var query = "SELECT firstname, lastname, id FROM Users WHERE email = ? AND password = ?";
    pool.query(query, [emailEntry, passEntry], function(err, result) {
        if (err) {
            console.log(err);
            res.render("index", {"page_name":"Home", "message":err});
        }
        else if (result.length < 1) {
            res.render("index", {"page_name":"Home", "message":"Invalid email or password."});
        }
        else {
            req.session.user = {
                firstname: result[0]['firstname'],
                lastname: result[0]['lastname'],
                id: result[0]['id']
            }
            res.redirect('/');
        }
    });
}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}
