App.MinistrantsRoute = Ember.Route.extend({
  model: function() {
		return App.pouch.findAll('ministrant');
  }
});

