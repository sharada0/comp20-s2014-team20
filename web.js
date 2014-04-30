// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

var api_key = 'e18c6ceaae14397336d3a768afc41d7fbbd6bbca';
var food_type = 'pizza';
var location = 'Boston';

var locu = require('locu');
var mclient = new locu.MenuItemClient(api_key);
mclient.search({name:food_type, locality: location},
				function(result){
					console.log(result.objects[0]);
				});

app.use(logfmt.requestLogger());

app.use('/assets', express.static('assets'));
// development only

app.get('/', function (req, res) {
  res.sendfile( __dirname + '/views/index.html');
});

app.get('/findmyfood', function (req, res) {
  res.sendfile( __dirname + '/views/form.html');
});

app.get('/results', function (req, res) {
  res.sendfile( __dirname + '/views/map.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});