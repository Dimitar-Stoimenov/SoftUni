function solve(input) {
    let randomString = input[0]
    let charPattern = input[1]

    while (charPattern.length > 0) {
        let equalityCheck = randomString.indexOf(charPattern) === randomString.lastIndexOf(charPattern)

        if (randomString.indexOf(charPattern) >= 0 && randomString.lastIndexOf(charPattern) >= 0 && !equalityCheck) {
            randomString = randomString.replace(charPattern, '')
            let firstPart = randomString.substring(0, randomString.lastIndexOf(charPattern))
            let secondPart = randomString.substring(randomString.lastIndexOf(charPattern) + charPattern.length)

            randomString = firstPart.concat(secondPart)
            charPattern = modifyPattern(charPattern)
            console.log('Shaked it.')

        } else {
            console.log('No shake.')
            console.log(randomString)
            break
        }
    }

    if (charPattern.length === 0) {
        console.log('No shake.')
        console.log(randomString)
    }

    function modifyPattern(string) {
        let indexToRemove = Math.floor(string.length / 2)

        let firstPartOfString = string.substring(0, indexToRemove)
        let secondPartOfString = string.substring(indexToRemove + 1)

        string = firstPartOfString.concat(secondPartOfString).trim()

        return string
    }
}

solve(
    ['##mtmmm!!mm.mm*mtm.#',
        'mtm'
    ]
)