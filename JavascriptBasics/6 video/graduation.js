function solve(input) {
    let name = input[0]
    let index = 1
    let currentGrade = Number(input[index])
    let totalGrade = 0
    let year = 1
    let failed = false

    while (year < 13) {
        currentGrade = Number(input[index])

        if (currentGrade < 4) {
            if (failed) {
                console.log(`${name} has been excluded at ${year} grade`)
                break
            } else {
                failed = true
            }
        } else {
            year++
            totalGrade += currentGrade
        }

        index++
    }

    let averageGrade = totalGrade / 12

    if (year === 13) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

solve(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "3.5",
    "6",
    "5.55",
    "5",
    "4.5",
    "4.5",
    "5.43",
    "5",
    '6']
)