'use strict';

module.exports = (app) => {
	require('./api/test.route')(app);
	require('./api/index.route')(app);
};
