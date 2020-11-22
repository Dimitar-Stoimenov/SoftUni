function solve(input) {
    let vowelsArr = ['a', 'e', 'u', 'i', 'o']
    let firstWord = input[0].toLowerCase()
    let secondWord = input[1].toLowerCase()
    let thirdWord = input[2].toUpperCase()

    let concatWord = firstWord.concat(secondWord)

    let thirdWordUsedIndex = 0

    for (let i = 0; i < concatWord.length; i++) {
        let char = concatWord[i]

        if (vowelsArr.includes(char)) {
            let replacementIndex = thirdWordUsedIndex++
            replacementIndex %= thirdWord.length
            let replacement = thirdWord[replacementIndex]
            concatWord = concatWord.replace(char, replacement)
        }
    }

    let result = ''

    for (let i = concatWord.length - 1; i >= 0; i--) {
        result += concatWord[i]        
    }

    console.log(`Your generated password is ${result}`)
}

solve(
    [
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
)