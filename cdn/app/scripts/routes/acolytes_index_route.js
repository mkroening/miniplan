"use strict";

App.AcolytesIndexRoute = Ember.Route.extend({
  model: function() {
		return EmberFire.Array.create({
			ref: App.rootFirebase.child('acolytes')
		});
  }
});

