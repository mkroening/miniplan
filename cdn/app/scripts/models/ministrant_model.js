/*global Ember*/

App.Ministrant = EPDB.Model.extend({
	serialize : function () {
		return this.getProperties(['givenName', 'surName']);
	}
});

