
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

//login route
app.get('/login', (req, res) => res.render('login', {csrf:'abc'}));

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.post('/process', function (req, res){
	console.log('formulario:' + req.query.form);
	console.log('nombre:' + req.body.name);
	console.log('email:' + req.body.email);
	
	
});

/*
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('express on localhost ' + app.get('port'));
});
*/

//ponerle .js o no igual funciona
var fortune = require('./lib/fortune.js');

app.get('/about', function (req,res) {
	res.render('about', { fortune: fortune.getFortune()});
});


app.use(express.static(path.join(__dirname,'/public')));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));