/*global describe, it, beforeEach, click, visit, find, fillIn, afterEach, buster */

'use strict';

buster.spec.expose();
var expect = buster.assertions.expect;

var currentPath = function () {
	return App.__container__.lookup("controller:application").get("currentRouteName");
};

describe("a test", function () {
	it("states the obvious", function () {
		expect(true).toEqual(true);
	});
});

describe('The Miniplan-App', function () {
	beforeAll(function (done) {
		Ember.run(function () {
			App.advanceReadiness();
			done();
		});
	});

	before(function (done) {
		Ember.run(function () {
			App.reset();
			done();
		});
	});

	describe("'s main page", function () {
		before(function (done) {
			Ember.run(function () {
				visit("/").then(done);
			});
		});
	});
});

