function solve(number, binaryDigit) {
    let binaryArray = []

    while (number > 0) {
        let reminder = number % 2
        binaryArray.push(reminder)
        number = Math.floor(number / 2)
    }

    let binarySequence = binaryArray.reverse().join('')
    // console.log(binarySequence)

    let binaryDigitCounter = 0

    binaryArray.forEach(x => {
        if (x == binaryDigit) {
            binaryDigitCounter++
        }
    })

    console.log(binaryDigitCounter)
}

solve(15, 1)