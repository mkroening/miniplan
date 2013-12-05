
buster.spec.expose();
var expect = buster.assertions.expect;

Ember.Test.adapter = Ember.Test.Adapter.create({
	asyncStart: function () { },
	asyncEnd: function () { },

	exception: function(reason) {
		var error, d;

		error = new Error(reason);

		throw error;
	}
});

App.setupForTesting();
App.injectTestHelpers();


