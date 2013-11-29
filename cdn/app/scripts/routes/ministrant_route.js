
App.MinistrantRoute = Ember.Route.extend({
  model: function(params) {
		return App.pouch.GET(params.ministrant_id);
  }
});

