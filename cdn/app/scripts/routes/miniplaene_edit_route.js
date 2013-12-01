
App.MiniplaeneEditRoute = Ember.Route.extend({
	model : function (params) {
		return this.get('store').find('miniplan', params.miniplan_id);
	},
	setupController : function (controller, miniplaene) {
		controller.set('model', miniplaene);
		controller.set('ministrants', this.get('store').find('ministrant'));
	}
});
