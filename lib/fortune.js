var fortuneCookies = [
"A",
"B",
"C",
];


exports.getFortune = function () {
	// body...
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};