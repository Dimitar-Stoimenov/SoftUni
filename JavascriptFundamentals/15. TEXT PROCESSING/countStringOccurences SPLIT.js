function solve(text, word) {
    let result = text.split(' ')
    let count = 0

    while (result.includes(word)) {
        count++
        result.splice(result.indexOf(word), 1)
    }

    console.log(count);
}

solve('This is a word and it also is a sentence', 'is')

// може и с for of цикъл, който проверява дали елемента е равен на търсената дума