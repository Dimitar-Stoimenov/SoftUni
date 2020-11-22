function solve(input) {
    let index = 0
    let num = input[index++]
    let lowestNumber = Number.MAX_SAFE_INTEGER

    while (num !== 'Stop') {
        number = Number(num)
        if (number < lowestNumber) {
            lowestNumber = number
        }
        num = input[index++]
    }
    console.log(lowestNumber)
}

solve(["100",
    "99",
    "80",
    "701",
    "Stop"])
