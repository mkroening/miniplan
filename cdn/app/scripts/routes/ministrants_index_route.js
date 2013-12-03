"use strict";

App.MinistrantsIndexRoute = Ember.Route.extend({
  model: function() {
		return this.get('store').findAll('ministrant');
  }
});

