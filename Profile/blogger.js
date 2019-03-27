var multer  = require('multer');
var pool = require('../Database/db');

exports.submitPost = function(req, res, source) {
    var postText = req.body.blog;
    var insertion = "INSERT INTO Posts (postText, profile) VALUES (?, ?)";
    pool.query(insertion, [postText, req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            if (req.files) {
                console.log("We have files");
            }

            if (source === "home") {
                res.redirect('/home');
            }
            else {
                res.redirect('/wall');
            }
        }
    });
}
