"use strict";

App.AcolytesRoute = Ember.Route.extend({
  model: function() {
		return EmberFire.Array.create({
			ref: App.rootFirebase.child('acolytes')
		});
  }
});

