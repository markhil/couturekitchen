var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	manufacturer: String,
	productCode: String,
	description: String,
	size: String,
	style: String,
	price: String,

})