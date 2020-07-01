'use strict';

const servicesMap = {};

const set = (serviceName, serviceObject) => {
	let checkIfServiceExists = Object.keys(servicesMap).includes(serviceName);

	if (checkIfServiceExists) {
		throw new Error('Service name already exists');
	} else {
		servicesMap[serviceName] = serviceObject;
	}
};

const get = (serviceName) => {
	let checkIfServiceExists = Object.keys(servicesMap).includes(serviceName);

	if (checkIfServiceExists) {
		return servicesMap[serviceName];
	} else {
		throw new Error('Service does not exist');
	}
};

module.exports = {
	set,
	get
};
