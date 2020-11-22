function solve(message) {
    let wordsCount = 1

    for (let index = 0; index <= message.length; index++) {
        let currentChar = message[index]
        if (currentChar === " ") {
            wordsCount++
        }
    }
    if (wordsCount <= 10) {
        console.log('The message was send successfully!')
    } else {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`)
    }
}

solve("This message has exactly eleven words. One more as it's")