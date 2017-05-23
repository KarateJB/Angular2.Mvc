﻿'use strict';

describe('Demo: function test', function () {

    it('should return 6 for 1 + 5', function () {
        expect(add(1, 5)).toEqual(6);
    });

    it('should return 2 for 6 - 4', function () {
        expect(minus(6, 4)).toEqual(2);
    });
});


describe('Demo: Html test', function () {

    // inject the HTML fixture for the tests
    beforeEach(function () {
        // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
        fixture.base = 'html';
        fixture.load('demo.index.html');

        //Register events
        document.getElementById('add').addEventListener('click', function () { eventHandler(handler.add); });
        document.getElementById('minus').addEventListener('click', function () { eventHandler(handler.minus); });
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        fixture.cleanup();
    });

    it('should return 10 for 4 + 6 on html', function () {
        document.getElementById('numA').value = 4;
        document.getElementById('numB').value = 6;

        document.getElementById('add').click();

        let actual = document.getElementById('result').innerHTML;
        expect(+actual).toEqual(10);
    });

});




