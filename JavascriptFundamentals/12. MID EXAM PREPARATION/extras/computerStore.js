function solve(input) {
    let tax = 1.2
    let totalPriceNoTax = 0
    let typeOfClient = input.pop()
    let discountCoef = 1

    if (typeOfClient === "special") {
        discountCoef = 0.9
    }

    for (let element of input) {
        element = Number(element)

        if (element < 0) {
            console.log(`Invalid price!`)
        } else {
            totalPriceNoTax += element
        }
    }

    if (totalPriceNoTax <= 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`)
        console.log(`Taxes: ${(totalPriceNoTax * tax - totalPriceNoTax).toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${(totalPriceNoTax * tax * discountCoef).toFixed(2)}$`)
    }
}

solve(
    [
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
    ]
)