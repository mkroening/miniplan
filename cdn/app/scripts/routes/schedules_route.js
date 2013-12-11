"use strict";

/* global EmberFire, Firebase */

App.SchedulesRoute = Ember.Route.extend({
	model : function () {
		return EmberFire.Array.create({
			ref: new Firebase("https://miniplan.firebaseio.com/schedules")
		});
	}
});
