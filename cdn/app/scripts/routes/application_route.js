
"use strict";

App.ApplicationRoute = Ember.Route.extend({
	renderTemplate : function () {
		this.render();
		this.render('chat', {
			controller: 'chat',
			outlet: 'chat',
			into: 'application'
		});
	}
});
