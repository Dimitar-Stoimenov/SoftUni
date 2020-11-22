function solve(num) {
    num = String(num)
    let sum = 0

    for (let index = 0; index < num.length; index++) {
        let currentNumber = Number(num[index])

        sum += currentNumber
    }

    console.log(`The sum of the digits is:${sum}`)
}

solve('125')