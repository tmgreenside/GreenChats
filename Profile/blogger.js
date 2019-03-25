var pool = require('../Database/db');

exports.submitPost = function(req, res, source) {
    var postText = req.body.blog;
    var insertion = "INSERT INTO Posts (postText, profile) VALUES (?, ?)";
    pool.query(insertion, [postText, req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            var filecount = req.body.uploadFiles.length;
            for (var i = 0; i < filecount; i++) {
                // TODO
                // req.body.uploadFiles[i].mv("../Uploads/" + req.session.user.id + "/");
                console.log(req.files.uploadFiles);
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
