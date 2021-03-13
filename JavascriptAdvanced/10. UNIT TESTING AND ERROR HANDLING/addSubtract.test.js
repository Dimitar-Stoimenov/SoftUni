const { expect } = require('chai');
const createCalculator = require('./addSubtract.js');

describe('add number', () => {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('get 0 for initial state', () => {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it('returns added number', () => {
        calc.add(1);
        let value = calc.get();
        expect(value).to.be.equal(1);
    });
    it('returns added number', () => {
        calc.add(1);
        calc.add(1);
        let value = calc.get();
        expect(value).to.equal(2);
    });
    it('returns subtracted number', () => {
        calc.subtract(1);
        let value = calc.get();
        expect(value).to.equal(-1);
    });
    it('returns combo number', () => {
        calc.add(1);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.equal(-1);
    });
    it('returns added number as a string', () => {
        calc.add('1');
        let value = calc.get();
        expect(value).to.equal(1);
    });
    it('returns subtracted number as a string', () => {
        calc.add('-1');
        let value = calc.get();
        expect(value).to.equal(-1);
    });
})