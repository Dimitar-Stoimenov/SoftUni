const sum = require('./sumNumbers.js');
const { expect } = require('chai');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums two numbers', () => {
        expect(sum([1, 2])).to.equal(3);
    });
    it('works two numbers as strings', () => {
        expect(sum(['1', '2'])).to.equal(3);
    });
});