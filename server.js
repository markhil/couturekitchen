// Dependencies
var express = require('express');
var app = express();
var path = require('path');





// Basic routing
app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});




// Listen
app.listen(3000);
console.log('App running');