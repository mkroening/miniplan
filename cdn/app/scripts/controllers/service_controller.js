
/* global Ember, App */

"use strict";

App.ServiceController = Ember.ObjectController.extend({
	splittedAssignments : function () {
		var assignments = this.get('model.assignments');

		var res = [];
		var lastO = null;
		if (assignments) {
			assignments.forEach(function (item, index) {
				if (index %2 === 0) {
					lastO = Ember.Object.create({links: item});
					res.push(lastO);
				} else {
					lastO.rechts = item;
				}
			});
		}
		return Ember.A(res);
	}.property('assignments.@each')
});
