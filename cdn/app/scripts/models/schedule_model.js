
"use strict";

App.Schedule = DS.Model.extend({
	services : DS.hasMany('Service', {async: true}),

	internalTitle : DS.attr('string')
});

App.Schedule.FIXTURES = [
	{id: 1, internalTitle: "Weihnachten 2013", services: [1,2,3]}
];

