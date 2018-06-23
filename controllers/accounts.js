var pool = require('./database')

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
                return result;
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
        connection.query(stmt, [n.firstname, n.lastname, n.email, n.pass], function(err, result) {
            if (err) {
                console.log("DB failed");
                console.log(err);
                return false;
            }
            return true;
        });
        
    }
};