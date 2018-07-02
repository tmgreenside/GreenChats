var CryptoJS = require("crypto-js");
var pool = require('./database');

exports.signin = function (req, res) {
    // TODO: limit login attempts
    if (req.body.enterEmail === "" || req.body.enterPass === "") {
        res.render('/', {message: "Invalid email or password"});
    } else {
        userenter = req.body.enterEmail;
        hashed_pw = req.body.enterPass;
        statement = "select * from Accounts where email = ? and password = ?";
        pool.query(statement, [userenter, hashed_pw], function (err, result) {
            if (err || result.length === 0) {
                res.redirect('/error');
                console.log(err);
                console.log(result);
            } else {
                req.session.user = {
                    first: result[0]['firstname'],
                    last: result[0]['lastname'],
                    email: result[0]['email'],
                    id: result[0]['acctID']
                };
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
            birthdate: req.body.birthdate,
            pass: req.body.pass1,
            occupation: req.body.job_description
        };
        if (!n.firstname || n.firstname === "" || !n.lastname || n.lastname === "") {
            res.render('signup.html', {message: "You must include your name"});
        } else {
            stmt = "insert into Accounts (firstname, lastname, email, birthdate, password, occupation, rel_status) values (?, ?, ?, STR_TO_DATE(?, '%m/%d/%Y'), ?, ?, ?)";
            pool.query(stmt, [n.firstname, n.lastname, n.email, n.birthdate, n.pass, n.occupation, "None"], function(err, result) {
                if (err) {
                    console.log("DB failed");
                    console.log(err);
                    res.redirect('/error');
                } else {
                    res.redirect('/');
                }
            });
        }
        
        
    }
};

exports.signout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};

function hashPassword(pass){
    var salt = "80868086"; //salt
    var hash = CryptoJS.SHA512(salt + pass);
    var password = hash.toString(CryptoJS.enc.Base64);
    //this was causing an issue with database syntax...
    password = password.replace("/", '');
    return password;
}