
var expect = require('chai').expect;
var sinon  = require('sinon');
var sha1   = require('sha1');

describe('validate_feedback method', function () {
	
	var validationf = require('../lib/app.js').validate_doc_update;

	it('should provide validation function', function () { expect(validationf).to.exist; });

	describe('when document is not correctly formatted', function() {

		// newauth existence and data-types
		it('throws "forbidden" when field newauth is missing', function() { 
			var testob = { type: "feedback" }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});
		it('throws "forbidden" when field newauth is missing properties', function() { 
			var testob = { type: "feedback", "newauth" : {} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

		it('throws "forbidden" when field newauth is having bad properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: {}, r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: {}} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: "", b: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

	
		// auth existence and data-types	
		it('throws "forbidden" when field auth is missing', function() { 
			var testob = { type: "feedback", "newauth": { a: "", r: ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});
		it('throws "forbidden" when field auth is missing properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, "auth": {}}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, "auth": {a : ""} }; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {a: "", r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {a: "", b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {r: "", b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {b: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {r: "", a: ""}, "auth": {r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

		it('throws "forbidden" when field auth is having bad properties', function() { 
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: {}, b: "", r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: "", b: {}, r: "" }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
			var testob = { type: "feedback", "newauth" : {a: "", r: ""}, auth: {a: "", b: "", r: {} }}; expect(function() { validationf(testob, testob, {})}).to.throw({});
		});

	});

	var FeedbackDoc = function() {
		this.type = "feedback";
		this.auth = { a: "", b: "", r: "" };
		this.newauth = { a: "", r: "" };
	};
	
	describe('when new document update is not authorized', function()
	{
		var userCtx = { roles: [], name: "" };

		// auth validation
		it('rejects an unanswered challenge', function() {
			var oD = new FeedbackDoc();
			var nD = new FeedbackDoc();

			oD.newauth.r = sha1('ab'); oD.newauth.a = 'a';

			nD.auth.r = sha1('ab') + 'asdasdasd'; // guaranteed to be something different
			nD.auth.a = 'a';
			
			expect(function() { validationf(nD, oD, userCtx)}).to.throw({});

		
			nD.auth.r = sha1('ab');
			nD.auth.a = 'x';
			expect(function() { validationf(nD, oD, userCtx)}).to.throw({});
		});

		it('rejects an incorrectly answered challenge', function() {
			var oD = new FeedbackDoc();
			var nD = new FeedbackDoc();

			oD.newauth.r = sha1('ab'); oD.newauth.a = 'a';

			nD.auth.r = sha1('ab');
			nD.auth.a = 'a'; nD.auth.b = 'x';

			expect(function() { validationf(nD, oD, userCtx)}).to.throw({});
		});
	});
});
