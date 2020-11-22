function solve(input) {
    input = input[0]
    let obj = {}

    for (let index in input) {
        index = Number(index)
        let char = input[index]

        if (!obj[char]) {
            obj[char] = [index]
        } else {
            obj[char].push(index)
        }
    }

    Object.entries(obj).forEach(letter => {
        let char = letter[0]
        let output = ''

        Object.entries(letter[1]).forEach(index => {
            if (output === '') {
                output += index[1]
            } else {
                output += '/' + index[1]
            }
        })

        console.log(char + ':' + output)
    })
}

solve(
    ['abababa', '']
)