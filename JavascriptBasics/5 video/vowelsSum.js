function solve(word) {
    let sum = 0

    for (let index = 0; index < word.length; index++) {
        let currentChar = word[index]

        switch (currentChar) {
            case 'a':
                sum++
                break;
            case 'e':
                sum += 2
                break;
            case 'i':
                sum += 3
                break;
            case 'o':
                sum += 4
                break;
            case 'u':
                sum += 5
                break;
        }
    }
    console.log(sum)
}

solve('gosho')