let pizzUni = require('./pizzUni');
const { expect } = require('chai');

describe("pizzUni tests", function () {
    describe("Make an order tests", () => {
        it("correct input", () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'milano', orderedDrink: 'coke' })).to.equal('You just ordered milano and coke.');
        });
        it("input only pizza", () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'milano' })).to.equal('You just ordered milano');
        });
        it('invalid input', () => {
            expect(() => pizzUni.makeAnOrder({ orderedDrink: 'coke' })).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });

    describe('getRemainingWork tests', () => {
        it('all orders are complete', () => {
            expect(pizzUni.getRemainingWork([])).to.equal('All orders are complete!');
            expect(pizzUni.getRemainingWork([{ pizzaName: 'milano', status: 'ready' }])).to.equal('All orders are complete!');
        });
        it('correctly differentiates between ready and non-ready pizzas', () => {
            expect(pizzUni.getRemainingWork([{ pizzaName: 'milano', status: 'ready' }, { pizzaName: 'siciliana', status: 'preparing' }])).to.equal(`The following pizzas are still preparing: siciliana.`);
        });
        it('shows multiple non-complete pizzas', () => {
            expect(pizzUni.getRemainingWork([{ pizzaName: 'napoli', status: 'preparing' }, { pizzaName: 'siciliana', status: 'preparing' }])).to.equal(`The following pizzas are still preparing: napoli, siciliana.`);
        });
    });

    describe('orderType tests', () =>{
        it('correct carry out discount', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
        });
        it('no discount for delivery', () => {
            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
        });
    })
});