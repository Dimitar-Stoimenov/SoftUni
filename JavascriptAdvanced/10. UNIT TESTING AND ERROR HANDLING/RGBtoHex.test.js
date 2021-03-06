const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHex');

describe('rgb to Hex color', () => {
    it('returns correct Hex value', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('returns correct Hex value 2', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('returns "undefined" for a value out of range', () => {
        expect(rgbToHexColor(365, 0, 0)).to.equal(undefined);
    });
    it('returns "undefined" for a value out of range 2', () => {
        expect(rgbToHexColor(-365, 0, 0)).to.equal(undefined);
    });
    it('returns "undefined" for a string param', () => {
        expect(rgbToHexColor('0', 0, '1')).to.equal(undefined);
    });
    it('returns "undefined" for an invalid param', () => {
        expect(rgbToHexColor(0, undefined, 0)).to.equal(undefined);
    });
    it('returns "undefined" for an invalid param 2', () => {
        expect(rgbToHexColor(0, 0)).to.equal(undefined);
    });
});