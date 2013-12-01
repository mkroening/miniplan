/*global Ember*/

App.ContactPossibility = DS.Model.extend({
	protocol : DS.attr('string'),
	value : DS.attr('string'),

	receiveSchedule : DS.attr('string'),

	htmlInputType : function () {
		switch (this.get('protocol')) {
			case 'mailto':
				return 'email';
			case 'tel':
				return 'tel';
		}
	}.property('protocol'),
});
App.ContactPossibility.FIXTURES = [
	{ id: 101, protocol : "mailto", value: "max@example.com", receiveSchedule : 'f'},
	{ id: 102, protocol : "tel", value: "012454 67890", receiveSchedule : 'f'},
	{ id: 201, protocol : "mailto", value: "melanie@example.com", receiveSchedule : 'f'},
];
