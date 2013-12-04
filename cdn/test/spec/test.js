/*global describe, it, expect, beforeEach, click, visit, find, fillIn */

'use strict';

(function () {

	var currentPath = function () {
		return App.__container__.lookup("controller:application").get("currentRouteName");
	};

	describe("The Miniplan-App", function () {
		beforeEach(function () {
			App.reset();
		});
		describe("The main page", function () {
			beforeEach(function () {
				visit("/");
			});
			it("is available", function () {
				expect(find("div")).to.exist;
			});
			it("provides links to ministrants", function () {
				expect(find("a").text()).to.contain("Ministranten");
			});
			it("provides links to miniplaene", function () {
				expect(find("a").text()).to.contain("Minipläne");
			});
			//TODO expand, when more functional landing page
		});

		describe("The ministrants page", function () {
			beforeEach(function () {
				return visit("/ministranten");
			});
			it("shall have a title", function () {
				expect(find("h1")).to.exist;
			});
			it("shall present a list of ministrants", function () {
				expect(find("ul")).to.exist;
				expect(find("ul>li a")).to.exist;
				click("ul>li>a:first-child").then(function () {
					expect(currentPath()).to.be.equal("ministrants.edit");
				});
			});
		});

		describe("The ministrants edit page", function () {
			beforeEach(function () {
				return visit("/ministranten/1");
			});
			it("shall have a title", function () {
				expect(find("h2")).to.exist;
			});
			it("shall have a bound title", function () {
				fillIn("input", "VALUE").then(function () {
					expect(find("h2").text()).to.be.equal("VALUE VALUE");
				});
			});
		});
	});
})();
