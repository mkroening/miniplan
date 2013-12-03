/* global DS */

App.Einteilung = DS.Model.extend({
	gottesdienst : DS.belongsTo('gottesdienst'),
	ministrant : DS.belongsTo('ministrant'),
});

App.Einteilung.FIXTURES = [
	{id: 1, gottesdienst: 1, ministrant: 1},
	{id: 2, gottesdienst: 1, ministrant: 2}
];
