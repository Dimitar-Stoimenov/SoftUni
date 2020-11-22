function solve(a, b) {
    let month = a
    let nights = Number(b)

    let priceStudio = 0
    let priceApartment = 0

    let discountedStudio = 1
    let discountedApartment = 1

    switch (month) {
        case 'May':
        case 'October':
            priceStudio = 50
            priceApartment = 65
            if (nights > 14) {
                discountedStudio = 0.7
            } else if (nights > 7) {
                discountedStudio = 0.95
            } else {
                discountedStudio = 1
            }
            break;
        case 'June':
        case 'September':
            priceStudio = 75.2
            priceApartment = 68.7
            if (nights > 14) {
                discountedStudio = 0.8
            } else {
                discountedStudio = 1
            }
            break;
        case 'July':
        case 'August':
            priceStudio = 76
            priceApartment = 77
            break;
    }

    if (nights > 14) {
        discountedApartment = 0.9
    } else {
        discountedApartment = 1
    }

    let totalPriceStudio = priceStudio * nights * discountedStudio
    let totalPriceApartment = priceApartment * nights * discountedApartment

    console.log(`Apartment: ${(totalPriceApartment).toFixed(2)} lv.`)
    console.log(`Studio: ${(totalPriceStudio).toFixed(2)} lv.`)
}

solve("June", "14")

