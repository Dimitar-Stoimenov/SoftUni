function calculateResult(input) {
    let [firstNum, operand, secondNum] = input.split(' ')
    let result = 0

    switch (operand) {
        case '/':
            result = Number(firstNum) / Number(secondNum)
            break;
        case '*':
            result = Number(firstNum) * Number(secondNum)
            break;
        case '+':
            result = Number(firstNum) + Number(secondNum)
            break;
        case '-':
            result = Number(firstNum) - Number(secondNum)
            break;
    }

    console.log(result);
}

calculateResult('53 /')