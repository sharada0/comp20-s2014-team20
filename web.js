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

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});