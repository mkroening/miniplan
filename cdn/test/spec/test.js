/*global describe, it, expect */
'use strict';
//var expect = require('chai').expect;
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
		expect(5).to.be.equal(5);
            });
        });
    });
})();
