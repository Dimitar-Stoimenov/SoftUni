function solve(input) {
    let previousChar = ''
    let output = ''

    for (const char of input) {

        if (char !== previousChar) {
            output += char
        }

        previousChar = char
    }

    console.log(output);
}

solve(
    'aaaaabbbbbcdddeeeedssaa'
)