'use strict';

const config = require('config');

const setup = async () => {
	let testValue = config.get('test');

	return await new Promise((resolve) =>
		setTimeout(() => {
			console.log('Bruh');
			resolve(testValue);
		}, 1000)
	);
};

module.exports = setup;
