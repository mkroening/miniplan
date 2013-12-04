"use strict";

App.SchedulesEditRoute = Ember.Route.extend({
	model : function (params) {
		return this.get('store').find('schedule', params.schedule_id);
	},
	setupController : function (controller, schedules) {
		controller.set('model', schedules);
		controller.set('acolytes', this.get('store').find('acolyte'));
	}
});
