"use strict";

/* global EmberFire, Firebase */

App.SchedulesScheduleIndexRoute = Ember.Route.extend({
	model : function (params) {
			return EmberFire.Object.create({
				ref: App.rootFirebase.child("schedules").child(params.schedule_id)
			});
	},
	setupController : function (controller, schedules) {
		controller.set('model', schedules);
		controller.set('acolytes', EmberFire.Array.create({
			ref: App.rootFirebase.child("acolytes")
		}));
	}
});
