const testNumbers = require('./app.js');
const { expect } = require('chai');

describe('tests', () => {
    describe('sumNumber', () => {
        it('check if input returns undefined for non numbers', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined);
        });
        it('can be positive', () => {
            let result = 2;
            expect(testNumbers.sumNumbers(1, 1)).to.equal(result.toFixed(2));
        });
        it('can be negative', () => {
            let result = -2;
            expect(testNumbers.sumNumbers(-1, -1)).to.equal(result.toFixed(2));
        });
        it('f', () => {
            expect(testNumbers.sumNumbers(null, '1')).to.equal(undefined);
        });
        it('float', () => {
            let result = -1.5;
            expect(testNumbers.sumNumbers(-0.5, -1)).to.equal(result.toFixed(2));
        });
    });

    describe('numberChecker', () => {
        it('odd checker', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
        });
        it('even checker', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!')
        });
        it('parses correctly', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!')
        });
        it('NaN error', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!')
        });
    })

    describe('averageSumArray', () => {
        it('returns correct avg sum', () => {
            expect(testNumbers.averageSumArray([1, 1])).to.equal(1);
        })
    })
})