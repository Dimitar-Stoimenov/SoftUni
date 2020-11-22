function solve(input) {
    let days = +input[0]
    let hours = +input[1]
    let sum = 0

    for (let i = 1; i <= days; i++) {
        let dayPrice = 0
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                price = 2.5
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price = 1.25
            } else {
                price = 1
            }

            dayPrice += price
        }

        sum += dayPrice
        console.log(`Day: ${i} - ${dayPrice.toFixed(2)} leva`)
    }

    console.log(`Total: ${sum.toFixed(2)} leva`)
}

solve(['2', '5'])