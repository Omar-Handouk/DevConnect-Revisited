'use strict';

module.exports = {
	defaultDB: {
		mongoURL: `mongodb+srv://${process.env.dbCluster}.mongodb.net`,
		mongoConnectionOpts: {
			dbName: 'development',
			user: process.env.dbUser,
			pass: process.env.dbPass,
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false
		}
	}
};
