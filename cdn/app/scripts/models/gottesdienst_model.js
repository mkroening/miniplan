
/* global DS */

App.Gottesdienst = DS.Model.extend({
	date : DS.attr('date'),
	time : DS.attr('time'),

	annotation : DS.attr('string'),

	einteilungen : DS.hasMany('einteilung', {async: true})
});

App.Gottesdienst.FIXTURES = [
	{id: 1, date: "2013-12-24", time: "18:30", annotation: "Heilig Abend", einteilungen : [1, 2]},
	{id: 2, date: "2013-12-29", time: "09:00", einteilungen: []},
	{id: 3, date: "2014-01-01", time: "10:30", annotation: "Neujahr", einteilungen: []}
];
