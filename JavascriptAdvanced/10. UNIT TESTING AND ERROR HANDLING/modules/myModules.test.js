const { sum } = require('./myModule.js');
const { expect } = require('chai');

describe('Sum function', () => {
    it('works with numbers', () => {
        expect(sum(1, 2)).to.equal(3);
    });

    it('works with numbers as strings', () => {
        expect(sum('11', '22')).to.equal(33);
    });

    it('returns NaN with invalid values', () => {
        expect(sum('a', 'a')).to.be.NaN;
    })
});