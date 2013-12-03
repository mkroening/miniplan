/*global DS */

App.Miniplan = DS.Model.extend({
	gottesdienste : DS.hasMany('gottesdienst', {async: true}),

	internalTitle : DS.attr('string')
});

App.Miniplan.FIXTURES = [
	{id: 1, internalTitle: "Weihnachten 2013", gottesdienste: [1,2,3]}
];

