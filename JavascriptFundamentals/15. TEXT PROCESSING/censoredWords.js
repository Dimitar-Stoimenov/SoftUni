function solve(text, word) {
    while (text.includes(word)) {
        char = '*'
        text = text.replace(word, char.repeat(word.length))
    }

    console.log(text);
}

solve('A small sentence with some smaller words', 'small')