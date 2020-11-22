function solve(a, b) {
    let num1 = Number(a)
    let num2 = Number(b)

    let output = ""
    let sum = 0

    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        if (currentNum % 9 == 0) {
            sum += currentNum
        }
    }

    console.log(`The sum: ${sum}`)

    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        if (currentNum % 9 == 0) {
            console.log(currentNum)
        }
    }
}

solve('155', '251')