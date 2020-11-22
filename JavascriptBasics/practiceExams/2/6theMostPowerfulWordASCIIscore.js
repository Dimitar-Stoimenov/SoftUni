function solve(input) {
    let i = 0
    let inputLine = input[i++]
    let mostPowerfulWord = ''
    let bestResult = 0

    while (inputLine !== 'End of words') {
        let wordResult = 0
        for (let j = 0; j < inputLine.length; j++) {
            let b = inputLine
            let num = b.charCodeAt(j)
            wordResult += +num
        }

        let check = inputLine[0]

        if (check === 'a' || check === 'A' || check === 'e' || check === 'E' || check === 'i' || check === 'I' || check === 'o' || check === 'O' || check === 'u' || check === 'U' || check === 'y' || check === 'Y') {
            wordResult = wordResult * inputLine.length
        } else {
            wordResult = Math.floor(wordResult / inputLine.length)
        }

        if (wordResult > bestResult) {
            bestResult = wordResult
            mostPowerfulWord = inputLine
        }

        inputLine = input[i++]
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${bestResult}`)
}

solve([
    'The',
    'Most',
    'Powerful',
    'Word',
    'Is',
    'Experience',
    'End of words'
])
