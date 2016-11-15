var express = require('express');
 var router = express.Router();

 var Todo = require('../../models/tables/todos');

 router.route('/')
   .get(function(req, res, next) {
     Todo.findAsync({}) //findAsync(param1, param2) param1:{} means get all rows, param 2: "" means get all data from those rows
     .then(function(todos) {
       res.json(todos); //return json object instead of a view
     })
     .catch(next)
     .error(console.error);
   })
   .post(function(req, res, next) {
    var todo = new Todo();
    todo.Title = req.body.Title;
    todo.Description = req.body.Description;
    todo.saveAsync()
    .then(function(todo) {
      console.log("success");
      res.json({'status': 'success', 'todo': todo});
    })
    .catch(function(e) {
      console.log("fail");
      res.json({'status': 'error', 'error': e});
    })
    .error(console.error);
  });
 
router.route('/:id')
 	.get(function(req, res, next) {
 		Todo.findOneAsync({_id: req.params.id}, {text: 1, done: 1}) //gets these parameters
 		.then(function(todo) {
 		res.json(todo);
 		})
 		.catch(next)
 		.error(console.error);
	})
	.put(function(req,res,next){
		var todo = {};
		var prop;
		for (prop in req.body){
			todo[prop] = req.body[prop];
		}
		Todo.updateAsync({_id: req.params.id}, todo)
		.then(function(updatedTodo){
			return res.json({'status': 'success', 'todo': updatedTodo});
		})
		.catch(function(e){
			return res.status(400).json({'status': 'fail', 'error': e});
		});
	})
	.delete(function(req, res, next){
		Todo.findByIdAndRemoveAsync(req.params.id)
		.then(function(deletedTodo) {
			res.json({'status': 'success', 'todo': deletedTodo});
		})
		.catch(function(e){
			res.status(400).json({'status': 'fail', 'error': e});
		});
	});

testfunction = function(req, res, next){
	res.render('test', {title: 'Test View'});
}

;

module.exports = router;