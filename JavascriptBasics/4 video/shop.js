function solve(a, b, c) {
    let product = a
    let city = b
    let quantity = Number(c)

    let coffeePrice
    let waterPrice
    let beerPrice
    let sweetsPrice
    let peanutsPrice

    switch (city) {
        case 'Sofia':
            coffeePrice = .5
            waterPrice = .8
            beerPrice = 1.2
            sweetsPrice = 1.45
            peanutsPrice = 1.6
            break
        case 'Plovdiv':
            coffeePrice = .4
            waterPrice = .7
            beerPrice = 1.15
            sweetsPrice = 1.30
            peanutsPrice = 1.5
            break
        case 'Varna':
            coffeePrice = .45
            waterPrice = .7
            beerPrice = 1.1
            sweetsPrice = 1.35
            peanutsPrice = 1.55
            break
    }

    let totalPrice

    switch (product) {
        case 'coffee':
        totalPrice = coffeePrice * quantity
            break;
        case 'water':
        totalPrice = waterPrice * quantity
            break;
        case 'beer':
        totalPrice = beerPrice * quantity
            break;
        case 'sweets':
        totalPrice = sweetsPrice * quantity
            break;
        case 'peanuts':
        totalPrice = peanutsPrice * quantity
            break;
    }
    console.log(totalPrice)
}

solve('coffee', 'Varna', '2')