

//crea una variale enviroment
const enviroment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[enviroment];
//config connection library
console.log(config);


//variable de ambiente para nuestro proyecto
module.exports = require('knex')(config);