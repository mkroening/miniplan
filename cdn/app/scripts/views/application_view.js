
"use strict";

/* global $ */

App.ApplicationView = Ember.View.extend({
	didInsertElement : function () {
		$(document).foundation();
	}
});
