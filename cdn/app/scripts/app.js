
/* global Ember */

var App = window.App = Ember.Application.create({
});

Ember.TextField.reopen(Ember.I18n.TranslateableAttributes);

function uuid(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)}
App.uuid = uuid;

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
