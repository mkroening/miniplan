
var config = module.exports;

config["tests"] = {
	rootPath : "../"
};

config["browsers"] = {
	extends: "tests",
	environment: "browser",

	libs: [
		"app/bower_components/modernizr/modernizr.js",
		"app/bower_components/jquery/jquery.js",
		"app/bower_components/handlebars/handlebars.js",
		"app/bower_components/ember/ember.js",
		"app/bower_components/ember-data/ember-data.js",
		"app/bower_components/cldr/plurals.js",
		"app/bower_components/ember-i18n/lib/i18n.js",
		"app/bower_components/foundation/js/foundation.min.js",
		"app/i18n/en.js",

		".tmp/scripts/compiled-templates.js",
		".tmp/scripts/combined-scripts.js",

		"test/setup.js"
		],

	tests: [
		"test/test-*.js"
	]
};

