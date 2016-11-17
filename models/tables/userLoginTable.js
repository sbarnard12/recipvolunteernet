//Model for the Database userLogin

//initialize mongoose ODM
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userLogin');
var Schema = mongoose.Schema;
var Promise = require('bluebird'); 
Promise.promisifyAll(mongoose);

var userLoginSchema = new Schema({
	userName: {type: String, required: true},
	password: {type: String, required: true}
});

var UserLogin = mongoose.model('UserLogin', userLoginSchema);

module.exports = UserLogin;