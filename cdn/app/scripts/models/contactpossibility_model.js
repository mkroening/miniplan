/*global Ember*/

App.ContactPossibility = DS.Model.extend({
	protocol : DS.attr('string'),
	htmlInputType : DS.attr('string'),
	value : DS.attr('string'),

	receiveSchedule : DS.attr('string'),
});
App.ContactPossibility.FIXTURES = [
	{ id: 101, htmlInputType: 'email', protocol : "mailto", value: "max@example.com", receiveSchedule : 'f'},
	{ id: 102, htmlInputType: 'tel', protocol : "tel", value: "012454 67890", receiveSchedule : 'f'},
	{ id: 201, htmlInputType: 'email', protocol : "mailto", value: "melanie@example.com", receiveSchedule : 'f'},
];
