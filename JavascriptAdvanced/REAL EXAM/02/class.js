class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }

    loadProducts(array) {
        array.forEach(line => {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName].productQuantity += Number(productQuantity);
                    this.budgetMoney -= Number(productTotalPrice);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.stockProducts[productName] = {};
                    this.stockProducts[productName].productQuantity = Number(productQuantity);
                    this.budgetMoney -= Number(productTotalPrice);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        })

        return this.history.join('\n').trim();
    };

    addToMenu(meal, neededProducts, price) {
        let objectLength = null;

        if (!this.menu[meal]) {
            this.menu[meal] = {};
            this.menu[meal].products = neededProducts;
            this.menu[meal].price = Number(price);
            objectLength = Object.keys(this.menu).length;
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        if (objectLength == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${objectLength} meals in the menu, other ideas?`;
        }
    };

    showTheMenu() {
        let objectLength = Object.keys(this.menu).length;

        if (objectLength < 1) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let menu = Object.entries(this.menu);
            let arr = [];

            menu.forEach(product => {
                let name = product[0];
                let price = product[1].price;
                arr.push(`${name} - $ ${price}`);
            })

            return arr.join('\n').trim();
        }
    };

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            let productsNeeded = this.menu[meal].products;
            let check = true;

            for (const prod of productsNeeded) {
                if (check == false) {
                    break;
                }

                let [name, quantity] = prod.split(' ');
                quantity = Number(quantity);

                if (this.stockProducts.hasOwnProperty(name)) {
                    if (this.stockProducts[name].productQuantity >= quantity) {
                        continue;
                    } else {
                        check = false;
                    }
                } else {
                    check = false;
                }
            }

            if (!check) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                productsNeeded.forEach(pr => {
                    let [name, quantity] = pr.split(' ');
                    quantity = Number(quantity);

                    this.stockProducts[name].productQuantity -= quantity;
                });

                this.budgetMoney += this.menu[meal].price;

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }

        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}

let kitchen = new Restaurant(1);
kitchen.loadProducts(['Yogurt 30 1', 'Honey 50 4', 'Strawberries 320 10', 'Banana 5 1']);

kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('awe', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('123', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('52', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);

console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.makeTheOrder('asd'));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 95.99));
console.log(kitchen.addToMenu('Ewee', ['Yogurt 1'], 19.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.menu);

console.log(kitchen.makeTheOrder('Ewee'));
console.log(kitchen.makeTheOrder('1'));

console.log(kitchen.loadProducts(['Yogurt 30 1', 'Honey 50 41', 'Strawberries 320 10', 'Banana 5 1']));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Ewee'));

