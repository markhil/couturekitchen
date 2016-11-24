var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	code: String,
	type: String,
	manufacturer: String,
	name: String,
	style: String,
	colour: String,
	size: String,
	description: String,
	price: Number,
	imageUrl: String
});
