function solve(input) {
    let totalFoodKG = +input[0]
    let totalFoodGrams = totalFoodKG * 1000
    let totalEaten = 0
    i = 1
    let inputLine = input[i++]

    while (inputLine !== 'Adopted') {
        let foodEatenToday = +inputLine
        totalEaten += foodEatenToday
        inputLine = input[i++]
    }

    if (totalFoodGrams >= totalEaten) {
        console.log(`Food is enough! Leftovers: ${totalFoodGrams - totalEaten} grams.`)
    } else {
        console.log(`Food is not enough. You need ${totalEaten - totalFoodGrams} grams more.`)
    }
}

solve(['4',
    '130',
    '345',
    '400',
    '180',
    '230',
    '120',
    'Adopted'])