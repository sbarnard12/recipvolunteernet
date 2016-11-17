//var $ = require('jquery');
//var todoTemplate = require("../views/partials/todo.hbs")
$(function() {
	//$(":button").on('click', addTodo);
	$(":text").on('keypress',function(e) {
		var key = e.keyCode;
		if( key == 13 || key == 169) {
		addTodo();
    	e.preventDefault();
    	e.stopPropagation();
    	return false;
		}
 	});
	$("li > input:checked").each(function(){
		$(this).parent().toggleClass('checked');
	});
  $('#test_button').on('click', testButton);
});

var addTodo = function() {
   var text = $('#taskTitle').val();
   $.ajax({
     url: '/todos/api/testfunction',
     type: 'POST',
     data: {
       text: text
     },
     dataType: 'json',
     success: function(data) { //make this go to the taskList page later
       var todo = data.todo;
       //var newLiHtml = todoTemplate(todo);
       $('form + ul').append(newLiHtml);
       $('#add-todo-text').val('');
     }
   });
 };

 var testButton = function(){
  console.log("test");
  $.ajax({
    url: '/apis/taskListApi/testfunction',
    data: {},
    success: function(data){
      $('#test_label').text(data);
    }
  });
 }