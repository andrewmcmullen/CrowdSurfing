
module.exports = function(app /*, passport */) {
    
    /**
     * public routes for voters
     */
    app.get('/login', function(req, res) {
	res.render('login.ejs');
    });
}
