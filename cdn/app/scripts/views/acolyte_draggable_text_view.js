
"use strict";

App.AcolyteDraggableTextView = Ember.View.extend({
	tagName : "li",
	attributeBindings : ['draggable'],

	draggable : "true",

	dragStart : function (event) {
		event.dataTransfer.effectAllowed = 'link';
		event.dataTransfer.setData('application/x-acolyte', this.get('model').id);
		event.dataTransfer.setData('text/plain', this.get('value'));
	}
});
