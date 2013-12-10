
"use strict";

App.ChatController = Ember.Controller.extend({

	needs: ['application'],

	text : "",

	model : [],

	init : function () {
		this._super();

		this.set('model', EmberFire.Array.create({
			ref : new Firebase("https://miniplan.firebaseio.com/chat")
		}));
	},

	actions : {
		sendChatMessage : function () {
			this.get('model').ref.push({authorName: this.get("controllers.application.loggedInUser.name"), text: this.get('text')});
			this.set('text', '');
		}
	}
});
