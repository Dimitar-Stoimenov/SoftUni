function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let meals = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    return function (input) {
        let [a, b, c] = input.split(' ')

        if (a === 'restock') {
            ingredients[b] += Number(c);
            return 'Success'

        } else if (a === 'prepare') {

            for (const key in meals[b]) {
                if (meals[b][key] * Number(c) > ingredients[key]) {
                    console.log(`Error: not enough ${key} in stock`); //                    
                    return `Error: not enough ${key} in stock`
                }
            }

            for (const key in meals[b]) {
                ingredients[key] -= meals[b][key] * Number(c);
            }
            return 'Success'

        } else {
            let ingredientArr = [];

            for (const key in ingredients) {
                ingredientArr.push(`${key}=${ingredients[key]}`)
            }

            let result = ingredientArr.join(' ');
            return result
        }
    }
}

let manager = solution();
manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');