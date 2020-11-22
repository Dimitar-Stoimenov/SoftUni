function solve(input) {
    let arr = input.split(' ')
    arr = arr.filter(x => x !== '')

    let sum = 0

    arr.forEach(line => {
        let prefix = line[0]
        let suffix = line[(line.length) - 1]
        let number = Number(line.substring(1, line.length - 1))

        if (prefix.charCodeAt(0) > 64 && prefix.charCodeAt(0) < 91) {
            number /= (prefix.charCodeAt(0) - 64)
        } else if (prefix.charCodeAt(0) > 96 && prefix.charCodeAt(0) < 123) {
            number *= (prefix.charCodeAt(0) - 96)
        }

        if (suffix.charCodeAt(0) > 64 && suffix.charCodeAt(0) < 91) {
            number -= (suffix.charCodeAt(0) - 64)
        } else if (suffix.charCodeAt(0) > 96 && suffix.charCodeAt(0) < 123) {
            number += (suffix.charCodeAt(0) - 96)
        }

        sum += number
    })

    console.log(sum.toFixed(2))
}

solve(
    'P34562Z q2576f   H456z'
)