
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var exphbs  = require('express-handlebars');
const knex = require('./db/knex');
var app = express();

//body parser
var bodyParser = require('body-parser');
var fortune = require('./lib/fortune.js');



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



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




app.use(express.static(path.join(__dirname,'/public')));


var router = require("./router/index.js");
//var users = require(".routers/user.js");

app.use("/", router);
//app.use("/user", index);

app.get ("/user", function(req, res){

	//una forma de un query en knex
	knex("usuarios")
	.select()
	//obligatorio escribir el then
	.then( objCollectUsers => {
		res.render("user/index", {objUsers:objCollectUsers});
	});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));