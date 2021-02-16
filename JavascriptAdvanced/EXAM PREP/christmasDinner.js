class ChristmasDinner {
    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = [];
        this.budget = budget;
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        };

        this._budget = budget;
    }

    shopping(product) {
        let [typeOfProduct, price] = product;

        if (this.budget < price) {
            throw new Error(`Not enough money to buy this product`)
        }

        this.budget -= price;
        this.products.push(typeOfProduct);
        return `You have successfully bought ${typeOfProduct}!`
    }

    recipes(recipe) {
        // recipe.productsList.forEach(x => {
        //     if (this.products.findIndex(x)) {
        //         throw new Error('We do not have this product');
        //     }
        // })?????

        // let obj = {
        //     recipeName: recipe.recipeName,
        //     productList: recipe.productsList
        // }

        this.dishes.push(obj);
        return `${this.recipeName} has been successfully cooked!`
    }


}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());
