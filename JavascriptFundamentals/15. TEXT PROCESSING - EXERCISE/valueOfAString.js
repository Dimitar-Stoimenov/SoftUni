function solve(input) {
    let string = input[0]
    let command = input[1]
    let sum = 0

    if (command === 'UPPERCASE') {
        for (let letter of string) {
            if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
                sum += letter.charCodeAt(0)
            }
        }

    } else {
        for (let letter of string) {
            if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
                sum += letter.charCodeAt(0)
            }
        }
    }

    console.log(`The total sum is: ${sum}`)
}

solve(
    ['HelloFromMyAwesomePROGRAM', 'LOWERCASE', '']
)