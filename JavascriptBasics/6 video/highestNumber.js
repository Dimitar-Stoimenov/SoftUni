function solve(input) {
    let index = 0
    let num = input[index++]
    let highestNumber = Number.MIN_SAFE_INTEGER

    while (num !== 'Stop') {
        number = Number(num)
        if (number > highestNumber) {
            highestNumber = number
        }
        num = input[index++]
    }
    console.log(highestNumber)
}

solve(["100",
    "99",
    "80",
    "701",
    "Stop"])
