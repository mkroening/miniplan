
"use strict";

App.ApplicationController = Ember.Controller.extend({

	loggedInUser : null,
	loggedIn : Ember.computed.bool('loggedInUser'),

	database : null,
	auth : null,

	init : function () {
		this._super();
		var self = this;
		self.set('database', new Firebase("https://miniplan.firebaseio.com"));
		self.set('auth', new FirebaseSimpleLogin(self.get('database'), function (error, user) {
			if (!error && user) {
				// logged in!
				self.set('loggedInUser', user);
			} else {
				self.set('loggedInUser', null);
			}   
		}));
	},  

	isIndex : function () {
		return this.get('currentPath') === 'index';
	}.property('currentPath'),

	actions : {
		logout : function () {
			this.get('auth').logout();
		},
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
