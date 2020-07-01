'use strict';

const router = require('express').Router();
const testService = require('../../services/service-manager').get(
	'TestService'
);

module.exports = (app) => {
	router.get('/', async (req, res) => {
		res.send(
			'<html>' +
				'<head>' +
				'<title>Test</title>' +
				'</head>' +
				'<body>' +
				'<h1>Hello, from test!</h1>' +
				'<a href="/">Go to index!</a>' +
				'</body>' +
				'</html>'
		);
	});

	router.get('/another', async (req, res, next) => {
		let result = undefined;

		try {
			result = await testService.asyncFunction();
		} catch (err) {
			next(err);
		}

		return res.json(result);
	});

	app.use('/test', router);
};
