'use strict';

const router = require('express').Router();

module.exports = (app) => {
	/**
	 * @method 	GET
	 * @URL 	/auth
	 * @desc 	None
	 * @access 	Public
	 */
	// eslint-disable-next-line no-unused-vars
	router.get('/', (req, res, next) => {
		res.status(200).json({
			path: '/auth'
		});
	});

	app.use('/api/v1/auth', router);
};
