const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('length is even or odd', () => {
    it('returns undefined if argument is not a string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it('returns even if the length of the string is even', () => {
        expect(isOddOrEven('as')).to.equal('even');
    });
    it('returns odd if the length of the string is odd', () => {
        expect(isOddOrEven('asd')).to.equal('odd');
    });
})