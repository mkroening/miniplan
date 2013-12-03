
"use strict";

App.Router.map(function () {
	this.resource("ministrants", {path: "ministranten"}, function () {
		this.route("edit", {path: "/:ministrant_id"});
		this.route("new");
	});

	this.resource("miniplaene", function () {
		this.route("edit", {path: "/:miniplan_id"});
	});
});
