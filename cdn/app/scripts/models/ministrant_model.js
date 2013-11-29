/*global Ember*/

App.Ministrant = DS.Model.extend({
	givenName : DS.attr('string'),
	surName : DS.attr('string'),

/*	dateOfBirth : DS.attr('string'),
	dateOfJoin : DS.attr('string'),
	dateOfResignation : DS.attr('string'),*/

	contactPossibilities : DS.hasMany('ContactPossibility', {async: true})
});

App.Ministrant.FIXTURES = [
	{id: 1, givenName: "Max", surName: "Mustermann", contactPossibilities: [ 101, 102 ]},

	{id: 2, givenName: "Melanie", surName: "Musterfrau", contactPossibilities: [ 201 ]}
];

