	var express = require('express');
	var router = express.Router();
	//var todos = require('../models/"new page"'); //This needs to have the name of the model in it
	router.get('/', function(req, res){
		res.render('tasks', {title: 'Tasks'});
		//res.render('view name', {variable: value, variable: value}')
	});
	module.exports = router;