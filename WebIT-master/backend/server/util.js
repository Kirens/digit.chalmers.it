exports.getData = function(req){
	return new Promise(function(resolve, reject){
		var reqBody = "";
		req.on('data', function(data) {
			reqBody += data;
		});

		req.on('end', function() {
			let jsonData = JSON.parse(reqBody);
			resolve(jsonData);
		});
	});
}

exports.defaultCatch = function(error, res, errorCode){
	console.log(error);
	res.sendStatus(errorCode);
};
