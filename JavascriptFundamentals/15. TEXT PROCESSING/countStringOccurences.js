function solve(text, word) {
    let count = 0
    let index = text.indexOf(` ${word} `)

    while (index >= 0) {
        count++
        index = text.indexOf(` ${word} `, index + 1)
    }

    if (text.startsWith(word)) {
        count++
    }

    if (text.endsWith(word)) {  
        count++
    }

    console.log(count)
}

solve('This is a word and it also is a sentence', 'is')