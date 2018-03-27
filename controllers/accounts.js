

exports.signin = function(req, res) {
	if (!req.body.enterEmail || !req.body.enterPass) {
		res.render('/', {message: "Invalid email or password"})
	} else {

	}
}