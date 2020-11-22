function solve(team, product, amountOfProducts) {
    let price = 0
    let stopMark = false

    switch (team) {
        case `Brazil`:
            switch (product) {
                case `flags`:
                    price = 4.2
                    break;
                case `caps`:
                    price = 8.5
                    break;
                case `posters`:
                    price = 5.35
                    break;
                case `stickers`:
                    price = 1.2
                    break;
                default:
                    console.log(`Invalid stock!`)
                    stopMark = true
                    break;
            }
            break;
        case `Argentina`:
            switch (product) {
                case `flags`:
                    price = 3.25
                    break;
                case `caps`:
                    price = 7.2
                    break;
                case `posters`:
                    price = 5.1
                    break;
                case `stickers`:
                    price = 1.25
                    break;
                default:
                    console.log(`Invalid stock!`)
                    stopMark = true
                    break;
            }
            break;
        case `Croatia`:
            switch (product) {
                case `flags`:
                    price = 2.75
                    break;
                case `caps`:
                    price = 6.9
                    break;
                case `posters`:
                    price = 4.95
                    break;
                case `stickers`:
                    price = 1.1
                    break;
                default:
                    console.log(`Invalid stock!`)
                    stopMark = true
                    break;
            }
            break;
        case `Denmark`:
            switch (product) {
                case `flags`:
                    price = 3.1
                    break;
                case `caps`:
                    price = 6.5
                    break;
                case `posters`:
                    price = 4.8
                    break;
                case `stickers`:
                    price = 0.9
                    break;
                default:
                    console.log(`Invalid stock!`)
                    stopMark = true
                    break;
            }
            break;
        default:
            console.log(`Invalid country!`)
            stopMark = true
            break;
    }

    if (!stopMark) {
        let result = (price * amountOfProducts).toFixed(2)

        if (result > 0) {
            console.log(`Pepi bought ${amountOfProducts} ${product} of ${team} for ${result} lv.`)
        }
    }
}

solve('Brazil',
    'posters',
    0
)