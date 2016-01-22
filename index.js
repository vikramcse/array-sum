'use strict';
var getType = require('what-type');

module.exports = function (arr) {
	if (getType(arr) === 'array') {
		return arr.reduce (function (prev, curr) {
			return prev + curr;
		});
	} else {
		throw Error("The input to the function must be array.")
	}
};