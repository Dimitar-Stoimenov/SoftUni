function solve(words, text) {    
    words = words.split(', ')

    while (text.includes('*')) {
        let index = text.indexOf('*')
        let length = 0

        while (true) {
            if (text[index++] === '*') {
                length++
            } else {
                break
            }
        }

        for (const word of words) {
            if (word.length === length) {
                let replacer = '*'.repeat(length)
                text = text.replace(replacer, word)
            }
        }
    }

    console.log(text)
}

solve(
    'great, learning',
'softuni is ***** place for ******** new programming languages'

)