function solution(firstNumber, secondNumber, thirdNumber) {

    let sum = sumTwoNumbers(firstNumber, secondNumber)
    let result = subtractNumbers(sum, thirdNumber)

    console.log(result);    

    function sumTwoNumbers(a, b) {
        return a + b
    }

    function subtractNumbers(a, b) {
        return a - b
    }
}

solution(23, 6, 10)