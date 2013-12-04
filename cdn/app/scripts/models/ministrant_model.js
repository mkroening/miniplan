
"use strict";

App.Ministrant = DS.Model.extend({
	givenName : DS.attr('string'),
	surName : DS.attr('string'),

/*	dateOfBirth : DS.attr('string'),
	dateOfJoin : DS.attr('string'),
	dateOfResignation : DS.attr('string'),*/

	contactPossibilities : DS.hasMany('ContactPossibility', {async: true}),

	shortenedName : function () {
		var surNameParts = ('' + this.get('surName')).split(' ');
		return this.get('givenName') + ' ' + surNameParts.map(function (x) {
			return ('' + x).slice(0,1) + '.'; }).join(' ');
	}.property('givenName', 'surName')
});

App.Ministrant.FIXTURES = [
	{id: 1, givenName: "Max", surName: "Mustermann", contactPossibilities: [ 101, 102 ]},
	{id: 2, givenName: "Melanie", surName: "Musterfrau", contactPossibilities: [ 201 ]}
];

