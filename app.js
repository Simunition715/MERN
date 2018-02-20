var express = require('express');

var app = express();
var routes = require('./routes/index');

app.use('/', routes);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000, function(){
    console.log('Listening on port 3000...')
})
