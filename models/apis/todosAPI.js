var express = require('express');
var router = express.Router();

var Todo = require('../../models/tables/todos');

var getAll = function(req, res, next){
  Todo.findAsync({})
  .then(function(taskList){
    res.json(taskList);
  })
  .catch(next)
  .error(console.error); 
  console.log("Test")
}
var save = function(req, res, next){
  var todo = new Todo({
    text: ''
  });
  todo.text = (req.body.text === null)? '': req.body.text;

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
}

var getbyID = function(req, res, next){
  Todo.findOneAsync({_id: req.params.id})
  .then(function(todo){
    res.json(todo);
  })
  .catch(next)
  .error(console.error);
}

var updateOne = function(req, res, next){
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
}

var deleteOne = function(req, res, next){
    Todo.findByIdAndRemoveAsync(req.params.id)
    .then(function(deletedTodo) {
      res.json({'status': 'success', 'todo': deletedTodo});
    })
    .catch(function(e){
      res.status(400).json({'status': 'fail', 'error': e});
    });
}

module.exports = {
  getAll : getAll,
  save: save,
  getbyID: getbyID,
  updateOne: updateOne,
  deleteOne: deleteOne
};
/*
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
};


module.exports = router;

*/