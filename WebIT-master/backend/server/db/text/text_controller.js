/**
 * Summary:
 * Has the concrete implemention on modifying text documents in the database.
 */

const util = require("./../../util.js")
const model = require("./text_model");
const mongoose = require("mongoose");
TextModel = mongoose.model("Text");

/**
 * Creates new text document.
 */
exports.addText = function(req, res){
	util.getData(req)
		.then(data => TextModel.create(data))
		.then(textDocument => res.sendStatus(200))
		.catch(error => util.defaultCatch(error, res, 400));
};

/**
 * Returns a text document by id
 */
exports.getTextById = function(req, res){
	TextModel.find({'_id': req.params.id})
		.then(result => res.send(result))
		.catch(error => util.defaultCatch(error, res, 400));
};

/**
 * Update a text document by id
 */
exports.updateTextById = function(req, res){
	util.getData(req)
		.then(data => TextModel.update({'_id': req.params.id}, data))
		.then(result => res.sendStatus(200))
		.catch(error => util.defaultCatch(error, res, 400));
};

/**
 * Delete a text document by id
 */
exports.deleteTextById = function(req, res){
	TextModel.remove({'_id': req.params.id})
		.then(result => res.sendStatus(200))
		.catch(error => util.defaultCatch(error, res, 400));
};

/**
 * Get all text documents
 */
exports.getTexts = function(req, res){
	TextModel.find({})
		.then(result => res.send(result))
		.catch(error => util.defaultCatch(error, res, 400));
};
