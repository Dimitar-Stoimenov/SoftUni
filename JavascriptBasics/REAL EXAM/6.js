function solve(input) {
    let locations = Number(input.shift())

    for (let index = 0; index < input.length; index) {
        let expectedYieldPerDay = Number(input[index++])
        let days = Number(input[index++])
        let totalYield = 0

        for (let j = 1; j <= days; j++) {
            let dailyYield = Number(input[index++])
            totalYield += dailyYield
        }

        let expectedYield = expectedYieldPerDay * days
        let averageYield = totalYield / days

        if (expectedYield <= totalYield) {
            console.log(`Good job! Average gold per day: ${averageYield.toFixed(2)}.`)
        } else {
            console.log(`You need ${((expectedYield - totalYield) / days).toFixed(2)} gold.`)
        }
    }

}

solve(
    [
        '2', '10', '3',
        '10', '10', '11',
        '20', '2', '20',
        '10'
    ]
)