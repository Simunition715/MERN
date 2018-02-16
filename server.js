var express = require('express');
var bp = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/client'));
app.use(session({
	secret: 'mnbvcxz',
	resave: false,
	saveUninitialized: true,
	rolling: true
}))
app.use(bp.json());

app.listen(8000, function(){
	console.log('Listening on port 8000...');
})
