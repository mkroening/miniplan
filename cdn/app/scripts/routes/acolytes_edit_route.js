
"use strict";

App.AcolytesEditRoute = Ember.Route.extend({
	model : function (params) {
			var ref = App.rootFirebase.child('acolytes/' + params.acolyte_id);
			ref.update({id: params.acolyte_id});
			return EmberFire.Object.create({
				ref: ref
			});
	}
});
