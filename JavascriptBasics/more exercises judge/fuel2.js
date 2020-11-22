function solve(a, b, c) {
    let fuelType = String(a)
    let fuelAmount = Number(b)
    let isValidCard = String(c)
    let card = Boolean

    if (isValidCard === 'Yes') {
        card = true
    } else {
        card = false
    }

    let gasolinePrice = 2.22
    let dieselPrice = 2.33
    let gasPrice = 0.93
        
    let gasolineDiscount = 0.18
    let dieselDiscount = 0.12
    let gasDiscount = 0.08

    if (card===true) {
        gasolinePrice = gasolinePrice - gasolineDiscount
        dieselPrice = dieselPrice - dieselDiscount
        gasPrice = gasPrice - gasDiscount
    } else {
        gasolinePrice = gasolinePrice
        dieselPrice = dieselPrice
        gasPrice = gasPrice
    }

    let totalPrice

    if (fuelType === 'Gasoline') {
        totalPrice = fuelAmount * gasolinePrice
    } else if (fuelType === 'Diesel') {
        totalPrice = fuelAmount * dieselPrice
    } else if (fuelType === 'Gas') {
        totalPrice = fuelAmount * gasPrice
    }

    let finalPrice = totalPrice

    if ((fuelAmount >= 20) && (fuelAmount <= 25)) {
        finalPrice = totalPrice * 0.92
    } else if (fuelAmount > 25) {
        finalPrice = totalPrice * 0.9
    } else {
        finalPrice = totalPrice
    }

    console.log(`${(finalPrice).toFixed(2)} lv.`)
}

solve('Diesel', '19', 'No')