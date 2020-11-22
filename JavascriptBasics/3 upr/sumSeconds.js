function solve(a, b, c) {
    let first = +a
    let second = +b
    let third = +c
    let total = first + second + third

    let convertMin = Math.floor(total / 60)
    let convertSec = total % 60

    if (convertSec < 10) {
        convertSec = '0' + convertSec
    }

    console.log(convertMin + ":" + convertSec)
}

solve(24, 50, 43)