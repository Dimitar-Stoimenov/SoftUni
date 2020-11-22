function solve(input) {
    let firstNum = +input[0]
    let secondNum = +input[1]
    let output = ""

    for (let i = firstNum; i <= secondNum; i++) {
        let numberAsString = i.toString()
        let evenSum = 0
        let oddSum = 0


        for (let index = 0; index < numberAsString.length; index++) {
            let currentNumber = Number(numberAsString[index])

            if (index % 2 === 0) {
                evenSum += currentNumber
            } else {
                oddSum += currentNumber
            }
        }

        if (evenSum === oddSum) {
            output += i + " "
        }
    }

    console.log(output)
}

solve(["100000",
    "100050"])
