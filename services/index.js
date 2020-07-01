'use strict';

const serviceManager = require('./service-manager');

module.exports = (app) => {
	require('./servos/test.service')(app, serviceManager);
};
