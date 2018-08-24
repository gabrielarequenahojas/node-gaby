var express = require("express");

var router = express.Router();

var fortune = require('../lib/fortune.js');

router.get('/', (req, res) => res.render('home'));

//login route
router.get('/login', (req, res) => res.render('login', {csrf:'abc'}));

router.get('/about', function (req,res) {
	res.render('about', { fortune: fortune.getFortune()});
});

module.exports = router;