function solve(input) {
    let text = input[0]
    let wordsArray = input[1]

    while (text.includes('_')) {
        let length = 1

        let startIndex = text.indexOf('_')

        for (let i = startIndex + 1; i < text.length; i++) {
            let currentChar = text[i]

            if (currentChar === '_') {
                length++
            } else {
                break
            }
        }

        wordsArray.forEach(word => {
            if (word.length === length) {
                let placeHolder = '_'.repeat(length)
                text = text.replace(placeHolder, word)
            }
        })
    }

    console.log(text)
}

solve(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)