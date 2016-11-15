var express = require('express');
var router = express.Router();

//set Todo to the Model 'Todo'
var Todo = require('../../models/tables/todos');

//This will get the database values, and pass them into the view
router.get('/', function(req, res, next) {
	Todo.findAsync() //do the find
	.then(function(todos){ //if the find succeeds
		res.render('todos', {title: "Todos", todos: todos})
	})
	.catch(next) //if the find fails with an error of a specific type
	.error(console.error); // specific promise error
});

module.exports = router;