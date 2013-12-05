"use strict";

App.Assignment = DS.Model.extend({
	service : DS.belongsTo('service'),
	acolyte : DS.belongsTo('acolyte'),
});

App.Assignment.FIXTURES = [
	{id: 1, service: 1, acolyte: 1},
	{id: 2, service: 1, acolyte: 2},
	{id: 3, service: 2, acolyte: 1}
];
