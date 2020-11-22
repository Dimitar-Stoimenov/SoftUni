function solve(input) {
    let totalFoodKG = Number(input.shift())
    let totalFoodGrams = totalFoodKG * 1000
    let foodEatenGrams = 0

    for (let command of input) {
        if (command === 'Adopted') {
            break
        } else {
            let food = Number(command)
            foodEatenGrams += food
        }
    }

    if (foodEatenGrams > totalFoodGrams) {
        console.log(`Food is not enough. You need ${foodEatenGrams - totalFoodGrams} grams more.`)
    } else {
        console.log(`Food is enough! Leftovers: ${totalFoodGrams - foodEatenGrams} grams.`)
    }
}

solve(
    [
        '4', '130',
        '345', '400',
        '180', '230',
        '120', 'Adopted',
        '', ''
    ]
)