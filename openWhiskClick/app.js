
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var openwhisk = require('openwhisk');
var ow = openwhisk({
	api: 'https://openwhisk.ng.bluemix.net/api/v1/', 
	api_key: '6e020d97-e02f-47ea-b4bc-2bfff803c407:VIJWD8lndEgI8ZjBAswJVrCfEd71zkWsxjmwepwiYfGK8UliC4qeUzTs7MFZ573O',
	namespace: 'amay.dubey_dev'});


app.get("/invoke/:action", function(req, res) {
	ow.actions.invoke({
		blocking: true,
		actionName: req.params.action,
		params: req.query
	}).then(function(param) {
		// Return the result of the OpenWhisk call
		res.send(JSON.stringify(param.response.result));
	}).catch(function(err) {res.send("Error: " + JSON.stringify(err));});
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
