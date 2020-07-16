'use strict';

module.exports = (app) => {
	require('./api/test.route')(app);
	require('./api/index.route')(app);
	require('./api/auth.route')(app);
	require('./api/posts.route')(app);
	require('./api/profile.route')(app);
	require('./api/users.route')(app);
};
