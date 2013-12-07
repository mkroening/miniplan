
"use strict";

App.Router.map(function () {
	this.resource("acolytes", {path: "acolytes"}, function () {
		this.route("edit", {path: "/:acolyte_id"});
		this.route("new");
	});

	this.resource("schedules", function () {
		this.route("edit", {path: "/:schedule_id"});
	});

	this.route("chat");
});
