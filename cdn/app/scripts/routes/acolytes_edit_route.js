
"use strict";

App.AcolytesEditRoute = Ember.Route.extend({
	model : function (params) {
			var ref = new Firebase("https://miniplan.firebaseio.com/acolytes/" + params.acolyte_id);
			ref.update({id: params.acolyte_id});
			return EmberFire.Object.create({
				ref: ref
			});
	}
});
