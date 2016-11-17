var express = require('express');
var router = express.Router();

testfunction = function(){
	return "Yay!";
};

module.exports = {
	testfunction : testfunction
};
