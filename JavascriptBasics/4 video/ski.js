function solve(a, b, c) {
    let days = Number(a)
    let typeOfRoom = b
    let feedback = c
    let nights = days - 1

    let priceOne = 18
    let priceApartment = 25
    let pricePresident = 35

    let totalPrice = 0

    switch (typeOfRoom) {
        case 'room for one person':
            totalPrice = priceOne * nights
            break;
        case 'apartment':
            if (days < 10) {
                totalPrice = (priceApartment * nights) * 0.7
            } else if (days >= 10 && days <= 15) {
                totalPrice = (priceApartment * nights) * 0.65
            } else {
                totalPrice = (priceApartment * nights) * 0.5
            }
            break;
        case 'president apartment':
            if (days < 10) {
                totalPrice = (pricePresident * nights) * 0.9
            } else if (days >= 10 && days <= 15) {
                totalPrice = (pricePresident * nights) * 0.85
            } else {
                totalPrice = (pricePresident * nights) * 0.8
            }
            break;
    }

    let finalPrice = 0

    if (feedback === 'positive') {
        finalPrice = totalPrice * 1.25
    } else if (feedback === 'negative') {
        finalPrice = totalPrice * 0.9
    }

    console.log(finalPrice.toFixed(2))
}

solve("2",
"apartment",
"positive")

