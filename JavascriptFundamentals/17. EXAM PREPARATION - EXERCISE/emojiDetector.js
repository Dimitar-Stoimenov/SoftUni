function solve(input) {
    let text = input[0]
    let numberPattern = /\d/g
    let coolThresholdArr = text.match(numberPattern)
    let coolThreshold = 1

    for (let number of coolThresholdArr) {
        number = Number(number)

        coolThreshold *= number
    }

    let emojiPattern = /([:]{2}|[*]{2})[A-Z][a-z]{2,}\1/g
    let emojiArr = text.match(emojiPattern)
    let coolEmojis = []

    for (let emoji of emojiArr) {
        let emojiReducedToLetters = emoji.substring(2, emoji.length - 2)
        let emojiCoolness = 0

        for (let char of emojiReducedToLetters) {
            let points = char.charCodeAt(0)
            emojiCoolness += points
        }

        if (emojiCoolness >= coolThreshold) {
            coolEmojis.push(emoji)
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`)
    for (const emoji of coolEmojis) {
        console.log(emoji)
    }
}


solve(
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    ]
)