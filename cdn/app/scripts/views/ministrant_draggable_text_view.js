
"use strict";

App.MinistrantDraggableTextView = Ember.View.extend({
	tagName : "li",
	attributeBindings : ['draggable'],

	draggable : "true",
	value : null,

	dragStart : function (event) {
		event.dataTransfer.effectAllowed = 'link';
		event.dataTransfer.setData('application/x-ministrant', this.get('value').get('id'));
		event.dataTransfer.setData('text/plain', this.get('value'));
	}
});
