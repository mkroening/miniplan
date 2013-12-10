"use strict";

/* global EmberFire, Firebase */

App.ScheduleRoute = Ember.Route.extend({
	model : function (params) {
			return EmberFire.Object.create({
				ref: App.rootFirebase.child('schedules').child(params.id)
			});
	},
	setupController : function (controller, schedules) {
		controller.set('model', schedules);
		controller.set('acolytes', EmberFire.Array.create({
			ref: App.rootFirebase.child('acolytes')
		}));
	}
});
