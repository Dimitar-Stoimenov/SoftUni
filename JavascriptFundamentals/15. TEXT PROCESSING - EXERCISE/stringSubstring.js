function solve(word, text) {
    let textArr = text.toLowerCase().split(' ')
    let tempWord = word.toLowerCase()
    let breakMark = false

    for (const element of textArr) {
        if (tempWord === element) {
            console.log(word)
            breakMark = true
            break
        }
    }

    if (!breakMark) {
        console.log(`${word} not found!`);
    }
}

solve(
    'javascript',
    'JavaScript is the best programmin%$g language'

)