function solve(input) {
    let firstNum = input[0]
    let secondNum = input[1]
    let output = ''

    for (let i = firstNum; i <= +secondNum; i++) {
        let index = String(i)

        let j = 0

        let a = +index[j]
        let b = +index[j + 2]
        let c = +index[j + 4]
        let oddSum = a + b + c

        let d = +index[j + 1]
        let e = +index[j + 3]
        let f = +index[j + 5]
        let evenSum = d + e + f

        if (oddSum === evenSum) {
            output += i + ' '            
        }
    }
    console.log(output)
}

solve(["100000",
    "100050"])
