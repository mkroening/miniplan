
/* global Ember */

var App = window.App = Ember.Application.create({
});

Ember.TextField.reopen(Ember.I18n.TranslateableAttributes);

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/store');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
