/** --- MODULES --- **/
var express  = require('express'), 
    app      = express(),
    appData  = require('./config/config.js'),
    router   = express.Router();
    port     = process.env.PORT || appData.port, 
    http     = require('http'), 
    path     = require('path');

/** --- CONFIGURATION --- **/
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('env', 'development');
app.use(express.static(__dirname + '/public'));


/** --- ROUTES --- **/
require('./routes/index.js')(app, appData);

/** --- SERVEUR --- **/
app.listen(port);