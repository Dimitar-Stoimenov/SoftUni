let lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('charLookup', () => {
    it('returns undefined when the first parameter is not a string', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('returns undefined when the second parameter is not an integer', () => {
        expect(lookupChar('a', 'a')).to.equal(undefined);
        expect(lookupChar('a', 1.2)).to.equal(undefined);

    });
    it('index value is out of range', () => {
        expect(lookupChar('asd', -1)).to.equal('Incorrect index');
        expect(lookupChar('asd', 3)).to.equal('Incorrect index');
    });
    it('returns the proper result', () => {
        expect(lookupChar('asd', 0)).to.equal('a');
        expect(lookupChar('asd', 1)).to.equal('s');
        expect(lookupChar('asd', 2)).to.equal('d');
    });
});