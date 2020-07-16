/*
 * https://dev.to/maixuanhan/stop-using-the-mongoose-s-default-connection-4nnj
 */
'use strict';

const mongoose = require('mongoose');
const config = require('config');

const connections = {};

const getConnection = (name) => {
	if (Object.keys(connections).includes(name)) {
		return connections[name];
	} else {
		throw new Error('Database connection not found');
	}
};

const getConnectionsArray = () => {
	return Object.values(connections);
};

const getConnectionsNames = () => {
	return Object.keys(connections);
};

/*------------------------------------------------------*/
connections['default'] = mongoose.createConnection(
	config.get('defaultDB.mongoURL'),
	config.get('defaultDB.mongoConnectionOpts')
);
/*------------------------------------------------------*/

module.exports = {
	getConnection,
	getConnectionsArray,
	getConnectionsNames
};
