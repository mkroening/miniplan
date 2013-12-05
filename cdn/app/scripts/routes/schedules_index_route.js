"use strict";

App.SchedulesIndexRoute = Ember.Route.extend({
	model : function () {
//		return this.get('store').findAll('schedule');
		return EmberFire.Array.create({
			ref: new Firebase("https://miniplan.firebaseio.com/schedules")
		});
	}
});
