function solve(stock, ordered) {

    let stockArray = []

    stock.forEach((el, i) => {
        if (i % 2 == 0) {
            let product = el;
            let quantity = Number(stock[i + 1])
            stockArray[product] = quantity
        }
    });

    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1])

        if (stockArray[product] === undefined) {
            stockArray[product] = quantity
        } else {
            stockArray[product] += quantity
        }
    }

    for (const product in stockArray) {
        console.log(`${product} -> ${stockArray[product]}`) 
    }    
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)