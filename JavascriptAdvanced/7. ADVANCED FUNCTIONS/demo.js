let add = (a, b) => a + b;

function calculate(operation, firstOperand, secondOperand) {
    let result = operation(firstOperand, secondOperand)

    return result
}

let sum = calculate(add, 10, 5)
console.log(sum);