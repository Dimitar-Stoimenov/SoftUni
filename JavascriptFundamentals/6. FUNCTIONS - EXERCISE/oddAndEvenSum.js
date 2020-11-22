function solution(inputNumber) {
    let inputNumberString = String(inputNumber)
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < inputNumberString.length; i++) {
        if (inputNumberString[i] % 2 == 1) {
            oddSum += Number(inputNumberString[i])
        } else {
            evenSum += Number(inputNumberString[i])
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solution(1000435)