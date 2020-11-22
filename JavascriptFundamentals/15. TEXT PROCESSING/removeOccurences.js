function solve(searchedWord, text) {

    while (text.indexOf(searchedWord) >= 0) {
        text = text.replace(searchedWord, '')
    }

    console.log(text);
}

solve('ice', 'kicegiciceeb')