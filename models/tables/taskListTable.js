
//Model for the Database taskList

//initialize mongoose ODM
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskList');
var Schema = mongoose.Schema;
var Promise = require('bluebird'); 
Promise.promisifyAll(mongoose);

//set the schema based on the database types
var TaskListSchema = new Schema({
	category: {type: Number, required: true},
	requesting: {type: String, required: true},
	offering: {type: String, required: true},
	description: {type: String, required: true},
	usePosterAddress: {type: Boolean, required: true},
	address: {
		streetNumber: {type: Number},
		streetName: {type: String},
		city: {type: String},
		province: {type: String},
		postalCode: {type: String},
	}
	modeofContact: {type: Number, required: true},
	pictureUrl: {type: String, required: true},
	posterID: {type: Schema.Types.ObjectId, required: true},
	matchedUserID: {type: Schema.Types.ObjectId},


});

var TaskList = mongoose.model('TaskList', TaskListSchema);

module.exports = TaskList;
