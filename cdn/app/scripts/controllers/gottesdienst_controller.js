
App.GottesdienstController = Ember.ObjectController.extend({
//	splittedEinteilungen : [],
	splittedEinteilungen : function () {
		var einteilungen = this.get('model.einteilungen');
		console.log(einteilungen);
		return einteilungen;

		var res = [];
		var lastO = null;
		einteilungen.forEach(function (item, index) {
			if (index %2 == 0) {
				lastO = {links: item};
				res.push(lastO);
			} else {
				lastO.rechts = item;
			}
		});
		return res;
	}.property('einteilungen')
});
