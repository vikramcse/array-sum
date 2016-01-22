var expect = require('chai').expect;
var sum = require('./index.js');

describe('Test for getting sum', function () {
	it('the sum should be a integer number', function () {
		expect(sum([1, 2, 3, 4, 5])).to.be.equal(15);
	})

	it('the sum should be a float number', function () {
		expect(sum([1, 2.1, 3, 4, 5.1])).to.be.equal(15.2);
	})
})