
"use strict";

App.AcolytesNewRoute = Ember.Route.extend({
	beforeModel : function () {
		this.transitionTo('acolytes.edit', App.uuid());
	}
});
