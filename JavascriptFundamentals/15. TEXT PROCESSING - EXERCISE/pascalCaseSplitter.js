function solve(input) {
    let word = ''
    let wordArray = []

    for (let char of input) {
        if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {

            if (word !== '') {
                wordArray.push(word)
                word = char
            } else {
                word = char
            }

        } else {
            word += char
        }
    }

    wordArray.push(word)

    let result = wordArray.join(', ')
    console.log(result)
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')