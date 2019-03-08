var pool = require('../Database/db');

exports.login = function(req, res) {
    var emailEntry = req.body.email;
    var passEntry = req.body.pass;
    var query = "SELECT id, firstname, middlename, lastname, email FROM Users WHERE email = ? AND password = ?";
    pool.query(query, [emailEntry, passEntry], function(err, result) {
        if (err) {
            console.log(err);
            res.send({response: "failure"});
        }
        else {
            req.session.user = {
                email: result[0]['email'],
                first: result[0]['firstname'],
                middle: result[0]['middlename'],
                last: result[0]['lastname'],
                id: result[0]['id']
            }
            res.send({response: "success"});
        }
    });
}

exports.logout = function(req.res) {
    req.session.destroy();
    res.redirect('/');
}
