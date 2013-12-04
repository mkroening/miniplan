"use strict";

App.AcolytesIndexRoute = Ember.Route.extend({
  model: function() {
		return this.get('store').findAll('acolyte');
  }
});

