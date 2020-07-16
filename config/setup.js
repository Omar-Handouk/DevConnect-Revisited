'use strict';

const dbHandler = require('./db-connections');

const setup = async () => {
	try {
		await Promise.all(dbHandler.getConnectionsArray());
		dbHandler.getConnectionsNames().forEach((value) => {
			console.info(`[Info][DB] Successfully connected to ${value}`);
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = setup;
