'use strict';

const router = require('express').Router();

module.exports = (app) => {
	/**
	 * @method 	GET
	 * @URL 	/users
	 * @desc 	None
	 * @access 	public
	 */
	// eslint-disable-next-line no-unused-vars
	router.get('/', (req, res, next) => {
		res.status(200).json({
			path: '/users'
		});
	});

	app.use('/api/v1/users', router);
};
