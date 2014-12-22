/** --- MODULES --- **/
var path           = require('path'),
    express        = require('express'), 
    http           = require('http'),
    bodyParser     = require('body-parser'),
    session        = require('express-session'),
    errorHandler   = require('errorhandler'),
    app            = express(),
    appData        = require('./config/config.js');


/** --- CONFIGURATION --- **/
app.set('port', process.env.PORT || appData.port);
app.set('views', __dirname + '/views');
app.set('public', __dirname + '/public');
app.set('view engine', 'jade');
app.set('env', 'development');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret: 'abitbol', resave: true, saveUninitialized: true}));
app.use(express.static(__dirname + '/public'));


/** --- ROUTES --- **/
require('./routes/index.js')(app, appData);

/** --- SERVEUR --- **/
if (app.get('env') == 'dev') {
    app.use(errorHandler());
}
app.listen(app.get('port'));