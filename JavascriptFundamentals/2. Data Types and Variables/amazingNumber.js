function solve(numberInput) {
    let number = numberInput
    let sum = 0
    let isAmazing = false

    while (number > 0) {
        let currentDigit = number % 10

        sum += currentDigit

        number = Math.trunc(number / 10)
        // number = parseInt(number / 10)
        // number = Math.floor(number / 10)
    }

    while (sum > 0) {
        let currentDigit = sum % 10

        if (currentDigit % 10 === 9) {
            isAmazing = true
            break
        }

        sum = Math.trunc(sum / 10)
    }

    // if (isAmazing) {
    //     console.log(`${numberInput} Amazing? True`)
    // } else {
    //     console.log(`${numberInput} Amazing? False`)
    // }

    console.log(`${numberInput} Amazing? ${isAmazing ? 'True' : 'False'}`)
}

solve(333)