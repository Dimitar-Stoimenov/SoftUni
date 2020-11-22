function solve(a, b, c) {
    let mins = +a
    let count = +b
    let calories = +c

    let burnedCals = mins * count * 5

    if (burnedCals >= calories/2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCals}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCals}.`)
    }
}

solve('30',
    '3',
    '600')