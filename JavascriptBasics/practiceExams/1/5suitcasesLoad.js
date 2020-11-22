function solve(input) {
    let capacity = input[0]
    let i = 1
    let inputLine = input[i++]
    let suitcases = 0

    while (inputLine !== 'End') {
        let suitcaseSpace = +inputLine
        suitcases++

        if (suitcases % 3 === 0) {
            capacity -= (suitcaseSpace * 1.1)
        } else {
            capacity -= suitcaseSpace
        }

        if (capacity < 0) {
            suitcases--
            break
        }

        inputLine = input[i++]
    }

    if (capacity < 0) {
        console.log(`No more space!`)
    } else {
        console.log(`Congratulations! All suitcases are loaded!`)
    }
    console.log(`Statistic: ${suitcases} suitcases loaded.`)
}

solve(['700.5', '180', '340.6', '126', '220'])