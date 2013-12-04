"use strict";

App.SchedulesIndexRoute = Ember.Route.extend({
	model : function () {
		return this.get('store').findAll('schedule');
	}
});
