module.exports = function(app) {
    // GET - Accueil
    app.get('/', function (req, res) {
        res.render('index', { 'title': 'Nodebase'});
    })
};
