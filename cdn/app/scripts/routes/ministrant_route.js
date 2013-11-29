
App.MinistrantRoute = Ember.Route.extend({
  model: function(params) {
		return this.get('store').find('ministrant', params.ministrant_id);
  }
});

