function solve(input) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|')

    let firstPattern = firstPart.match(/([#$%*&])[A-Z]+\1/)[0]
    firstPattern = firstPattern.substring(1, firstPattern.length - 1)

    // second step
    let pattern = /[\d]{2}:[\d]{2}/g
    let secondPartArr = secondPart.match(pattern)
    let obj = {}

    for (const line of secondPartArr) {
        let [ascii, length] = line.split(':')
        let char = String.fromCharCode(ascii)

        if (firstPattern.includes(char)) {
            obj[char] = Number(length) + 1
        }
    }

    // third step
    let thirdPatternString = '(^| )' + '[' + firstPattern + ']' + '[\\S]+'
    let thirdPattern = new RegExp(thirdPatternString, 'g')

    let wordMatches = thirdPart.match(thirdPattern)

    // for (let word of wordMatches) {
    //     word = word.trim()
    //     let firstLetter = word[0]

    //     if (word.length === obj[firstLetter]) {
    //         console.log(word)
    //     }
    // }

    for (let i = 0; i < firstPattern.length; i++) {
        let char = firstPattern[i]
        let length = obj[char]

        for (let word of wordMatches) {
            word = word.trim()

            if (word.length === length && word[0] === char) {
                console.log(word)
            }
        }
    }
}

solve(
    [
        'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|Argo     Gara So La Arm Armyw21  O daOfa Or Ti Sar saTheww The Parahaos'
    ]
)