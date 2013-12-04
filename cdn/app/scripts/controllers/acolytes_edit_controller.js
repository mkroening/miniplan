"use strict";
App.AcolytesEditController = Ember.ObjectController.extend({
	actions : {
		save : function () {
			this.get('model').save();
		},
		revert : function () {
			this.get('model').rollback();
		}
	}
});
