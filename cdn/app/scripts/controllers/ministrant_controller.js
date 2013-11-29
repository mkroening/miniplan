
App.MinistrantController = Ember.ObjectController.extend({

	actions : {
		save : function () {
			App.pouch.PUT(this.get("model")).then(function () {
			}, function () {
				console.log(arguments);	
			});
		}
	}

});
