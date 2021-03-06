var multer  = require('multer');
var fs = require('fs-extra');
var pool = require('../Database/db');

// function moveFiles(req) {
//     var fileName;
//     var originalName;
//     var userDir = req.session.user.id;
//     for (var file in req.files) {
//         fileName = req.files[file].filename;
//         originalName = req.files[file].originalname;
//         fs.copy('../uploads/' + fileName, '../uploads/' + userDir + '/' + originalName).then(
//             () => console.log('success!')
//         ).catch(err => console.error(err)); // still in progress
//     }
// }

exports.submitPost = function(req, res, source) {
    var postText = req.body.blog;
    var insertion = "INSERT INTO Posts (postText, profile) VALUES (?, ?)";
    pool.query(insertion, [postText, req.session.user.id], function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            if (req.files) {
                console.log(result.insertId);
                insertion = "INSERT INTO PostMedia (postID, type, filepath) VALUES (?, ?, ?)";
                for (var i in req.files) {
                    pool.query(insertion, [result.insertId, req.files[i].mimetype, "uploads/" + req.files[i].filename], function(err, result) {
                        if (err) {
                            console.log(err);
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
