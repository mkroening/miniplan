"use strict";

App.AcolytesIndexRoute = Ember.Route.extend({
  model: function() {
		return EmberFire.Array.create({
			ref: new Firebase("https://miniplan.firebaseio.com/acolytes")
		});
  }
});

