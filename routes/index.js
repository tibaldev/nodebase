module.exports = function(app, appData) {
    // GET - Accueil
    app.route('/').get(function (req, res) {
        res.render('index', { 'title': appData.title});
    });

    // GET - 404
    app.route('*').get(function(req, res) { 
        res.status(404).render('404', { title: appData.title });
    });
};
