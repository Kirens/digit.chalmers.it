/**
 * Summary:
 * Has the schema for text documents.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var textSchema = Schema({
	header: String,
  text: {
		type: String,
		required: true
	},
	lastUpdated: Date, // Server will always update this value before saving.
	created: Date // Server will always set this value once.
});

textSchema.pre('validate', function(next){
	this.lastUpdated = new Date();
	if(!this.created){
		this.created = new Date();
	}
	next();
});

module.exports = mongoose.model('Text', textSchema);
