class ChristmasDinner {
    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};
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

        this.products.push(typeOfProduct);
        this.budget -= price;
        return `You have successfully bought ${typeOfProduct}!`
    }

    recipes(recipe) {
        let productsMark = true;

        recipe.productsList.forEach(x => {
            if (!this.products.includes(x)) {
                productsMark = false;
            }
        })

        if (productsMark) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`
        } else {
            throw new Error("We do not have this product")
        }
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(x => x.recipeName === dish)) {
            throw new Error("We do not have this dish")
        }

        if (this.guests[name]) {
            throw new Error("This guest has already been invited")
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let resultArr = [];

        for (const name in this.guests) {
            let dish = this.guests[name];
            
            let products = this.dishes.find(x => x.recipeName === dish).productsList.join(', ');

            resultArr.push(`${name} will eat ${dish}, which consists of ${products}`);
        }

        // this.guests.forEach(guest => {
        //     let name = Object.keys(guest)[0];
        //     let dish = Object.values(guest)[0];

        //     let products = this.dishes.find(x => x.recipeName === dish).productsList.join(', ')
           
        //     resultArr.push(`${name} will eat ${dish}, which consists of ${products}`);
        // })     

        return resultArr.join('\n')
    }
}

let dinner = new ChristmasDinner(150);

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
    productsList: ['Rice', 'Honey', 'Peppers']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Ivan', 'Folded cabbage leaves filled with rice');
console.log(dinner.inviteGuests('Ivanka', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
