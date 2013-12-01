
App.MiniplaeneIndexRoute = Ember.Route.extend({
	model : function () {
		return this.get('store').findAll('miniplan');
	}
});
