function solve(a, b) {
    let budget = Number(a)
    let season = b
    let destination = String

    if (budget <= 100) {
        destination = 'Bulgaria'
    } else if (budget <= 1000) {
        destination = 'Balkans'
    } else if (budget > 1000) {
        destination = 'Europe'
    }

    let price = 0

    switch (destination) {
        case 'Bulgaria':
            switch (season) {
                case 'summer':
                    price = 0.3 * budget
                    break;
                case 'winter':
                    price = 0.7 * budget
                    break;
            }
            break;
        case 'Balkans':
            switch (season) {
                case 'summer':
                    price = 0.4 * budget
                    break;
                case 'winter':
                    price = 0.8 * budget
                    break;
            }
            break;
        case 'Europe':
            price = 0.9 * budget
            break;
    }

    let place = String

    if (season === 'winter') {
        place = 'Hotel'
    } else if (season === 'summer' && destination === 'Europe') {
        place = 'Hotel'
    } else {
        place = 'Camp'
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${(price).toFixed(2)}`)
}

solve("50", "summer")