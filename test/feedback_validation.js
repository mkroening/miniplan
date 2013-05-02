
var expect = require('chai').expect;

describe('Feedback Validation', function () {
	
	var validationf = require('../lib/app.js').validate_doc_update;

	it('should provide validation function', function () { expect(validationf).to.exist; });

	describe('when document is not correctly formatted', function() {

		// newauth existence and data-types
		it('should throw forbidden when field newauth is missing', function() { 
			var testob = { type: "feedback" }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});
		it('should throw forbidden when field newauth is missing properties', function() { 
			var testob = { type: "feedback", "newauth" : {} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

		it('should throw forbidden when field newauth is having bad properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: {}, r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: {}} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: "", b: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

	
		// auth existence and data-types	
		it('should throw forbidden when field auth is missing', function() { 
			var testob = { type: "feedback", "newauth": { a: "", r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});
		it('should throw forbidden when field auth is missing properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, "auth": {}}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, "auth": {a : ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {a: "", r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {a: "", b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {r: "", b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

		it('should throw forbidden when field auth is having bad properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: {}, b: "", r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: "", b: {}, r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: "", b: "", r: {} }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});


		// auth validation
		it('should reject challenge unanswered', function() {
			
		});
	});


});
