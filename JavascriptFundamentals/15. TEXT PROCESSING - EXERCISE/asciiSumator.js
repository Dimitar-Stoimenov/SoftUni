function solve(input) {
    let [firstChar, secondChar, string] = input
    let sum = 0

    if (firstChar.charCodeAt(0) > secondChar.charCodeAt(0)) {
        [firstChar, secondChar] = [secondChar, firstChar]
    }

    for (let char of string) {
        if (char.charCodeAt(0) > firstChar.charCodeAt(0) && char.charCodeAt(0) < secondChar.charCodeAt(0)) {
            sum += char.charCodeAt(0)
        }
    }

    console.log(sum)
}

solve(['.', '@', 'dsg12gr5653feee5'])