const numberOperations = require('./numberOperations');
const { expect } = require('chai');

describe("Testing number operations", function () {
    describe("Math power tests", function () {
        it("Math Power", function () {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
        it("returns undefined for a non-number argument", () => {
            expect(numberOperations.powNumber('a')).to.NaN;
        })
    })

    describe('Number checker', () => {
        it("invalid input", () => {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        });
        it('number is lower than 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal("The number is lower than 100!");
        });
        it('number is higher or equal to 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");
        });
        it('number is exactly 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
        });
    })

    describe('sums arrays', () => {
        it('correctly summing the values on the same indexes in 2 arrays', () => {
            expect(numberOperations.sumArrays([1, 1], [1, 2])).to.deep.equal([2, 3]);
        });
        it('correctly summing the values on the same indexes in 2 arrays if they are not of the same length', () => {
            expect(numberOperations.sumArrays([1], [1, 1])).to.deep.equal([2, 1]);
        });
    })
});