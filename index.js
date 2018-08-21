
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

/*
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('express on localhost ' + app.get('port'));
});
*/

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));