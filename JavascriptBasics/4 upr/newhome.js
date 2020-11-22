function solve(a, b, c) {
    let type = a
    let amount = Number(b)
    let budget = Number(c)

    let totalPrice = 0

    switch (type) {
        case 'Roses':
            if (amount > 80) {
                totalPrice = amount * 5 * 0.9
            } else {
                totalPrice = amount * 5
            }
            break;
        case 'Dahlias':
            if (amount > 90) {
                totalPrice = amount * 3.8 * 0.85
            } else {
                totalPrice = amount * 3.8
            }
            break;
        case 'Tulips':
            if (amount > 80) {
                totalPrice = amount * 2.8 * 0.85
            } else {
                totalPrice = amount * 2.8
            }
            break;
        case 'Narcissus':
            if (amount < 120) {
                totalPrice = amount * 3 * 1.15
            } else {
                totalPrice = amount * 3
            }
            break;
        case 'Gladiolus':
            if (amount < 80) {
                totalPrice = amount * 2.5 * 1.2
            } else {
                totalPrice = amount * 2.5
            }
            break;
    }
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${amount} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

solve("Tulips",
    "88",
    "260")


