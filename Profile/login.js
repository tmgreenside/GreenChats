var pool = require('../Database/db');

exports.login = function(req, res) {
    var emailEntry = req.body.emailEntry;
    var passEntry = req.body.passEntry;
    var query = "SELECT * FROM Users WHERE email = ? AND password = ?";
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
                email: result[0]['email'],
                first: result[0]['firstname'],
                middle: result[0]['middlename'],
                last: result[0]['lastname'],
                gender: result[0]['gender'],
                birthdate: reqult[0]['birthdate'],
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
