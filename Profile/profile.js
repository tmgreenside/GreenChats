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
            console.log(result[0]);
            res.send({response: "success"});
        }
    });
}
