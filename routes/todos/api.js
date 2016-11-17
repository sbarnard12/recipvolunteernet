var express = require('express');
var router = express.Router();

var Todo = require('../../models/tables/todos');
var todoApi = require('../../models/apis/todosAPI');

 router.route('/')
   .get(function(req, res, next){
   	   	todoApi.getAll(req, res, next);
   	})
   .post(function(req, res, next){
   		todoApi.save(req, res, next);
   });
 
router.route('/:id')
 	.get(function(req, res, next) {
		todoApi.getbyID(req, res, next);
	})
	.put(function(req,res,next){
		todoApi.updateOne(req, res, next);
	})
	.delete(function(req, res, next){
		todoApi.deleteOne(req, res, next);
	});

testfunction = function(){
	return "Yay!";
};

module.exports = testfunction;