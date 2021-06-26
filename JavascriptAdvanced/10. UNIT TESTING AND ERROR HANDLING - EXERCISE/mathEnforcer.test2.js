let mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('returns undefined for a non-number argument', () => {
            expect(mathEnforcer.addFive('asd')).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });
        it('adds 5 to the number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('adds 5 to a floating number', () => {
            expect(mathEnforcer.addFive(0.01)).to.equal(0.01 + 5);
        });
        it('adds 5 to a negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });
    describe('subtractTen', () => {
        it('returns undefined for a non-number argument', () => {
            expect(mathEnforcer.subtractTen('asd')).to.equal(undefined);
        });
        it('subtracts 10 from the number', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });
        it('subtracts 10 from a floating number', () => {
            expect(mathEnforcer.subtractTen(0.01)).to.equal(0.01 - 10);
        });
        it('subtracts 10 from a negative number', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });
    describe('sum', () => {
        it('returns undefined for a non-number first argument', () => {
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
        });
        it('returns undefined for a non-number second argument', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        });
        it('returns the sum of the two numbers', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it('returns the sum of two floating numbers', () => {
            expect(mathEnforcer.sum(0.01, 0.02)).to.equal(0.01 + 0.02);
            expect(mathEnforcer.sum(0.001, 0.002)).to.equal(0.001 + 0.002);
        });
        it('returns the sum of an integer and a floating number', () => {
            expect(mathEnforcer.sum(1, 0.01)).to.equal(1+0.01);
        });
        it('returns the sum of two negative numbers', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });
        it('returns the sum of a negative and a positive number', () => {
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        });
        it('returns the sum of a negative numbers and a floating positive number', () => {
            expect(mathEnforcer.sum(-1, 0.01)).to.equal(-0.99, 0.01);
        });
    });
})