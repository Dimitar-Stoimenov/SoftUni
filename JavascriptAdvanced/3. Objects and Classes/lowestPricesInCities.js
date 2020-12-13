function solve(input) {
    let products = {}

    for (let line of input) {
        let [town, product, price] = line.split(' | ')

        if (!products[product]) {
            products[product] = {}
            products[product][town] = Number(price)
        } else {
            products[product][town] = Number(price)
        }
    }

    Object.entries(products).forEach(x => {
        let product = x[0]
        let sorted = Object.entries(x[1]).sort((a, b) => a[1] - b[1])
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`)
    })
}

solve(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
)