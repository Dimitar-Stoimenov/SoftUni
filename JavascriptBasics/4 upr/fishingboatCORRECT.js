function solve(a, b, c) {
    let budget = Number(a)
    let season = b
    let people = Number(c)

    let price = 0

    switch (b) {
        case 'Spring':
            price = 3000
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200
            break;
        case 'Winter':
            price = 2600
            break
    }

    let discountPercent = 0

    if (people <= 6) {
        discountPercent = 0.1
    } else if (people >= 7 && people <= 11) {
        discountPercent = 0.15
    } else if (people >= 12) {
        discountPercent = 0.25
    }

    let extraDiscount = 1

    if ((people % 2 === 0) && (season !== 'Autumn')) {
        extraDiscount = 0.95
    } else {
        extraDiscount = 1
    }

    let totalPrice = (price * (1 - discountPercent)) * extraDiscount

    if (budget >= totalPrice){
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }
}

solve("3000", "Summer", "14")
