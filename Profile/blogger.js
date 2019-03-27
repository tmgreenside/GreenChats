var multer  = require('multer');
var fs = require('fs-extra');
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
                var fileName;
                var originalName;
                var userDir = req.session.user.id;
                for (var file in req.files) {
                    fileName = req.files[file].filename;
                    originalName = req.files[file].originalname;
                    fs.move('../uploads/' + fileName, '../uploads/' + userDir + '/' + originalName, function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        else {
                            console.log("Success");
                        }
                    });
                }
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
