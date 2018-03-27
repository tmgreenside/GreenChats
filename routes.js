module.exports = function(app) {


	app.get('/', function (req, res) {
		res.render('index.html');
	});

	app.post('/', accounts.signin);
	

	app.get('/*', function (req, res) {
		res.render('error.html')
	})
}