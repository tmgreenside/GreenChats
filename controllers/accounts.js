var CryptoJS = require("crypto-js");
var pool = require('./database');

exports.signin = function (req, res) {
    if (req.body.enterEmail === "" || req.body.enterPass === "") {
        res.render('/', {message: "Invalid email or password"});
    } else {
        userenter = req.body.enterEmail;
        hashed_pw = req.body.enterPass;
        statement = "select * from Accounts where email = ? and password = ?";
        pool.query(statement, [userenter, hashed_pw], function (err, result) {
            if (err || result.length === 0)
                return "";
            else {
                req.session.user = {
                    first: result[0].firstname,
                    last: result[0].lastname,
                    email: result[0].email,
                    id: result[0].acctID
                };
                
                console.log(req.session.user);
                res.redirect('/home');
            }
        });
    }
};

exports.signup = function(req, res) {
    pass1 = req.body.pass1;
    pass2 = req.body.pass2;
    if (pass1 !== pass2){
        console.log("Passwords don't match");
        res.render('signup.html', {message: "Passwords must match"});
    } else {
        n = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            pass: req.body.pass1
        };
        stmt = "insert into Accounts (firstname, lastname, email, password) values (?, ?, ?, ?)";
        pool.query(stmt, [n.firstname, n.lastname, n.email, n.pass], function(err, result) {
            if (err) {
                console.log("DB failed");
                console.log(err);
                res.redirect('/error');
            }
            res.redirect('/');
        });
        
    }
};

function hashPassword(pass){
    var salt = "80868086"; //salt
    var hash = CryptoJS.SHA512(salt + pass);
    var password = hash.toString(CryptoJS.enc.Base64);
    //this was causing an issue with database syntax...
    password = password.replace("/", '');
    return password;
}