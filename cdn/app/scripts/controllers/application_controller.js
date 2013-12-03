
App.ApplicationController = Ember.Controller.extend({

	isIndex : function () {
		return this.get('currentPath') === 'index';
	}.property('currentPath'),

	actions : {
		transitionUp : function () {
			var currentPath = this.get('currentPath').split('.');
			if (currentPath.pop() === 'index') {
				currentPath.pop();
			}
			if (currentPath.length === 0) {
				this.transitionToRoute('index');
			} else {
				this.transitionToRoute(currentPath.join('.'));
			}
		}
	}
});
