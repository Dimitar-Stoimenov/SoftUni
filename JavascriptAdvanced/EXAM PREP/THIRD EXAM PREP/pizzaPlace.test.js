let pizzUni = require('./pizzaPlace');
const { expect, assert } = require('chai');

describe('Tests', () => {
    describe('Make an order function tests', () => {
        let pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza1 = { orderedPizza: 'pizza' };
        let pizza2 = { orderedDrink: 'drink' };
        let pizza3 = {};
        it('throws error for empty obj and for only drink', () => {
            // assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder(pizza3)).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder(pizza2)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it('ordered both', () => {
            expect(pizzUni.makeAnOrder(pizza)).to.equal(`You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);
        });
        it('ordered only pizza', () => {
            expect(pizzUni.makeAnOrder(pizza1)).to.equal(`You just ordered ${pizza1.orderedPizza}`);
        });
    });

    describe('status tests', () => {
        let emptyArr = [];
        let arr = [{ pizzaName: 'milano', status: 'preparing' }];
        let arr2 = [{ pizzaName: 'milano', status: 'preparing' }, { pizzaName: 'calcone', status: 'preparing' }, { pizzaName: 'neapol', status: 'ready' }];

        it('All orders are complete', () => {
            expect(pizzUni.getRemainingWork(emptyArr)).to.equal('All orders are complete!');
        });
        it('Single order is being prepared', () => {
            expect(pizzUni.getRemainingWork(arr)).to.equal(`The following pizzas are still preparing: ${arr[0].pizzaName}.`);
        });
        it('Multiple orders are being prepared', () => {
            let output = [];
            arr2.filter(x => x.status != 'ready').forEach(x => output.push(x.pizzaName));
            expect(pizzUni.getRemainingWork(arr2)).to.equal(`The following pizzas are still preparing: ${output.join(', ')}.`);
        });
    });

    describe('carry out or delivery tests', () => {
        let totalSum = 100;
        let carryOut = 'Carry Out';
        let delivery = 'Delivery';

        it('carry out', () => {
            expect(pizzUni.orderType(totalSum, carryOut)).to.equal(90);
        });

        it('delivery', () => {
            expect(pizzUni.orderType(totalSum, delivery)).to.equal(100);
        });

        it('invalid', () => {
            expect(pizzUni.orderType(totalSum, '')).to.equal(undefined);
        });
    });
});