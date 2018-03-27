module.exports = function(app) {


	app.get('/', function (req, res) {
		res.render('index.html', {message: ""});
	});

	app.post('/', accounts.signin);


	app.get('/*', function (req, res) {
		res.render('error.html')
	})
}