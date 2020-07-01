'use strict';

const router = require('express').Router();

module.exports = (app) => {
	router.get('/', async (req, res) => {
		res.send(
			'<html>' +
				'<head>' +
				'<title>Index</title>' +
				'</head>' +
				'<body>' +
				'<h1>Hello, from index!</h1>' +
				'<a href="/test">Go to test!</a>' +
				'</body>' +
				'</html>'
		);
	});

	app.use('/', router);
};
