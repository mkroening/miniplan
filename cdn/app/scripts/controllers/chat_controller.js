
App.ChatController = Ember.Controller.extend({
	text : "",
	actions : {
		sendChatMessage : function () {
			console.log(this.get('model'));
			this.get('model').ref.push({authorName: "Jonas", text: this.get('text')});
			this.set('text', '');
		}
	}
});
