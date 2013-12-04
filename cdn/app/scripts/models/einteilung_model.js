"use strict";

App.Einteilung = DS.Model.extend({
	service : DS.belongsTo('service'),
	acolyte : DS.belongsTo('acolyte'),
});

App.Einteilung.FIXTURES = [
	{id: 1, service: 1, acolyte: 1},
	{id: 2, service: 1, acolyte: 2}
];
