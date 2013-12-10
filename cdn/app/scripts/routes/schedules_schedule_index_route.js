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
		controller.set('acolytes', EmberFore.Array.create({
			ref: App.rootFirebase.child("acolytes")
		}));
	}
});