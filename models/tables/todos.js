//Model for the Database Todo

//initialize mongoose ODM
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');
var Schema = mongoose.Schema;
var Promise = require('bluebird'); 
Promise.promisifyAll(mongoose);

//set the schema based on the database types
var TodoSchema = new Schema({
	text: {type: 'String', required: true},
	done: {type: 'Boolean'}
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;


/* 
	Title: {type: 'String'},
	taskCategory: {type: 'String'},
	requesting: {type: 'String'},
	offering: {type: 'String'},
	Description: {type: 'String'},
	address: {type: 'String'},


		text: {type: 'String', required: true},
	done: {type: 'Boolean'},
*/