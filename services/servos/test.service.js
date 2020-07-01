'use strict';

class TestService {
	constructor(app) {
		this.app = app;
	}

	async asyncFunction() {
		return await new Promise((resolve) => {
			setTimeout(() => resolve({ test: true }), 2000);
		});
	}
}

module.exports = (app, serviceManager) => {
	serviceManager.set('TestService', new TestService(app));
};
