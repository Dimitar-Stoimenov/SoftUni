let dealership = require('./dealership');
const { expect } = require('chai');

describe('Tests', () => {
    describe('newCarCost tests', () => {
        it('new car has proper discount for returned old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A4 B8', 40000)).to.equal(25000);
            expect(dealership.newCarCost('Audi A8 D5', 40000)).to.equal(15000);
        });
        it('new car has proper price when not returning old car or invalid returned car', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
            expect(dealership.newCarCost('', 1)).to.equal(1);
        });
    });

    describe('carEquipment tests', () => {
        // single element, single pick      
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });

        // test overloading - multiple elements, multiple picks
        it('multiple elements, multiple picks', () => {
            expect(dealership.carEquipment(['1', '2', '3', '4'], [0, 1])).to.deep.equal(['1', '2']);
        });
    });

    describe('euroCategory tests', () => {
        it('under 4', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('over 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${15000 * 0.95}.`);
        });
        it('exactly 4 ', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${15000 * 0.95}.`);
        })
    });
});