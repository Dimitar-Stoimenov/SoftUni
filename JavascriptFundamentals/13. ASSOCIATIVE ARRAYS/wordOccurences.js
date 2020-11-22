function solve(input) {
    let words = {}

    for (const word of input) {
        if (words[word]) {
            words[word]++
        } else {
            words[word] = 1
        }
    }

    let wordsArray = Object.entries(words)
    let sortedWordsArray = wordsArray.sort((a, b) => {
        let firstWordCounter = a[1]
        let secondWordCounter = b[1]

        return secondWordCounter - firstWordCounter
    })

    sortedWordsArray.forEach(line => {
        console.log(`${line[0]} -> ${line[1]} times`)        
    })
}

solve(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
)