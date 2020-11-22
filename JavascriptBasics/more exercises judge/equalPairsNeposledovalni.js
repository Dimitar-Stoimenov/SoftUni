function solve(input) {
    let n = input[0]

    let a = 0
    let b = 0
    let equalPairs = true
    let maxValue
    let minValue
    let currentValue = 0
    let previousValue

    for (let i = 1; i < input.length; i += 2) {
        a = Number(input[i])
        b = Number(input[i + 1])

        currentValue = a + b

        if (currentValue > previousValue) {
            equalPairs = false
            if (currentValue > maxValue) {
                maxValue = currentValue
            }
        } else if (currentValue < previousValue) {
            equalPairs = false
            if (currentValue < minValue) {
                minValue = currentValue
            }
        }

        previousValue = currentValue
        if (!maxValue) {
            maxValue = currentValue
            minValue = currentValue
        }
    }

    if (!equalPairs) {
        console.log(`No, maxdiff=${(maxValue - minValue)}`)
    } else {
        console.log(`Yes, value=${currentValue}`)
    }
}

solve([7,
    34,
    -33,
    52,
    12,
    -32,
    32,
    23,
    41,
    7,
    25,
    34,
    23,
    124,
    21])