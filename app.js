/** --- MODULES --- **/
var express  = require('express'), 
    app      = express(), 
    router   = express.Router();
    port     = process.env.PORT || 1337, 
    http     = require('http'), 
    path     = require('path');

/** --- CONFIGURATION --- **/
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('env', 'development');
app.use(express.static(__dirname + '/public'));


/** --- ROUTES --- **/
require('./routes/index.js')(app);

/** --- SERVEUR --- **/
app.listen(port);