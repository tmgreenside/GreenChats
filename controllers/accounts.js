var db = require('./controllers/database');

exports.signin = function (req, res) {
    if (!req.body.enterEmail || !req.body.enterPass) {
        res.render('/', {message: "Invalid email or password"});
    } else {
        result = db.login();
        res.send(result);
    }
};

exports.signup = function(req, res) {
    
}