'use strict';

const router = require('express').Router();

module.exports = (app) => {
	/**
	 * @method 	GET
	 * @URL 	/profile
	 * @desc 	None
	 * @access 	public
	 */
	// eslint-disable-next-line no-unused-vars
	router.get('/', (req, res, next) => {
		res.status(200).json({
			path: '/profile'
		});
	});

	app.use('/api/v1/profile', router);
};
