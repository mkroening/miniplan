
App.GottesdienstController = Ember.ObjectController.extend({
//	splittedEinteilungen : [],
	splittedEinteilungen : function () {
		var einteilungen = this.get('model.einteilungen');

		var res = [];
		var lastO = null;
		einteilungen.forEach(function (item, index) {
			if (index %2 == 0) {
				lastO = Ember.Object.create({links: item});
				res.push(lastO);
			} else {
				lastO.rechts = item;
			}
		});
		return Ember.A(res);
	}.property('einteilungen.@each')
});
