function solution(firstNumber, secondNumber) {
    let firstNumberFactorial = factorial(firstNumber)
    let secondNumberFactorial = factorial(secondNumber)
    let result = divideNumbers(firstNumberFactorial, secondNumberFactorial)

    console.log(result.toFixed(2));

    function factorial(number) {
        let factorial = 1
        for (let i = 1; i <= number; i++) {
            factorial *= i            
        }
        return factorial
    }

    function divideNumbers(a, b) {
        return a / b
    }
}

solution(5, 2)