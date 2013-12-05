"use strict";

App.SchedulesRoute = Ember.Route.extend({
	model : function () {
		return this.get('store').findAll('schedule');
	}
});
