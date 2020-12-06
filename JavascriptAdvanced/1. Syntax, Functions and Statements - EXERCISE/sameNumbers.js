function solve(number) {
    number = String(number)
    let prevChar = number[0]
    let mark = true
    let sum = 0

    for (let char of number) {
        if (char !== prevChar) {
            mark = false
        }

        sum += Number(char)
    }

    console.log(mark)
    console.log(sum)
}

solve(
    1234
)