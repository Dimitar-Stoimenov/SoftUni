const { expect } = require("chai");
const isSymmetric = require('./isSymmetric');

describe('is Symetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.true;
    });

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.false;
    });

    it('input is a string', () => {
        expect(isSymmetric('a')).to.false;
    });

    it('input is a number', () => {
        expect(isSymmetric(1)).to.equal(false);
    });

    it('returns false for type-coeced elements', () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    });

    // test overloading
    it('returns true for valid symmetric array as strings', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });

    it('returns false for valid non-symmetric array as strings', () => {
        expect(isSymmetric(['b', 'a'])).to.be.false;
    });

    it('returns true for valid symmetric input with odd elements', () => {
        expect(isSymmetric(['1', '2', '1'])).to.be.true;
    });
});

