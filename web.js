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

// get index
app.get('/', function (req, res) {
  res.sendfile( __dirname + '/views/index.html');
});

// post index? route with req/res headers
app.post('/', function (req, res)) {
	  res.header('Access-Control-Allow-Origin','*');
  	req.header('Access-Control-Allow-Headers', 'X-Requested-With');
});

// get findmyfood
app.get('/findmyfood', function (req, res) {
  res.sendfile( __dirname + '/views/form.html');
});

// post form data from find my food?
app.post('/formdata', function (req, res) {
    console.log(req.body.food_selection);
    console.log(req.body.max_price);
});

// get search results
app.get('/results', function (req, res) {
  res.sendfile( __dirname + '/views/map.html');
});

// get restaurant page
app.get('/restaurant', function (req, res) {
  res.sendfile( __dirname + '/views/restaurant.html');
});

// get user history
app.get('/history', function (req, res) {
  res.sendfile( __dirname + '/views/history.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});