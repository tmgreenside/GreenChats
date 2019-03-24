var pool = require('../Database/db');

exports.submitPost = function(req, res, source) {
    var postText = req.body.blog;
    var insertion = "INSERT INTO Posts (postText, profile) VALUES (?, ?)";
    pool.query(insertion, [postText, req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result.insertId);
            console.log(req.body.uploadFiles.length);
            // TODO

            if (source === "home") {
                res.redirect('/home');
            }
            else {
                res.redirect('/wall');
            }
        }
    });
}
