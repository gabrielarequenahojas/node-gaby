
var express = require('express');

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('express on localhost ' + app.get('port'));
});
