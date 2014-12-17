module.exports = function(app, appData) {
    // GET - Accueil
    app.get('/', function (req, res) {
        res.render('index', { 'title': appData.title});
    });

    app.get('*', function(req, res) { 
        res.status(404).render('404', { title: appData.title });
    });
};
