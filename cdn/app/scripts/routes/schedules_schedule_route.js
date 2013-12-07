"use strict";

App.SchedulesScheduleRoute = Ember.Route.extend({
	model : function (params) {
			return EmberFire.Object.create({
				ref: new Firebase("https://miniplan.firebaseio.com/schedules/" + params.schedule_id)
			});
	},
	asetupController : function (controller, schedules) {
		controller.set('model', schedules);
//		controller.set('acolytes', this.get('store').find('acolyte'));
	}
});
