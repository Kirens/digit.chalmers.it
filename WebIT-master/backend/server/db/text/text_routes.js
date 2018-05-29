/**
 * Summary:
 * Routes requests to the correct method
 */

module.exports = function(app) {
  const textController = require("./text_controller.js");

  /**
   * Creates a new text document
   */
  app.post('/text', textController.addText);

  /**
   * Returns a text document by id
   */
  app.get('/text/:id', textController.getTextById);

  /**
   * Updates a text document by id
   */
  app.put('/text/:id', textController.updateTextById);

  /**
   * Deletes a text document by id
   */
  app.delete('/text/:id', textController.deleteTextById);

	/**
		* Get all text documents
	 */
	app.get('/text', textController.getTexts);

}
