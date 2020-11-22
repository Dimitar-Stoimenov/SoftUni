function solve(a, b, c, d) {
    let budget = +a
    let sex = b
    let age = +c
    let sport = d
    let price = 0

    switch (sport) {
        case 'Gym':
            if (sex === 'f') {
                price = 35
            } else {
                price = 42
            }
            break;
        case 'Boxing':
            if (sex === 'f') {
                price = 37
            } else {
                price = 41
            }
            break;
        case 'Yoga':
            if (sex === 'f') {
                price = 42
            } else {
                price = 45
            }
            break;
        case 'Zumba':
            if (sex === 'f') {
                price = 31
            } else {
                price = 34
            }
            break;
        case 'Dances':
            if (sex === 'f') {
                price = 53
            } else {
                price = 51
            }
            break;
        case 'Pilates':
            if (sex === 'f') {
                price = 37
            } else {
                price = 39
            }
            break;
    }
    if (age <= 19) {
        price = price * 0.8
    }
    if (budget >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        console.log(`You don't have enough money! You need $${(price - budget).toFixed(2)} more.`)
    }
}



solve('50', 'm', '23', 'Gym')