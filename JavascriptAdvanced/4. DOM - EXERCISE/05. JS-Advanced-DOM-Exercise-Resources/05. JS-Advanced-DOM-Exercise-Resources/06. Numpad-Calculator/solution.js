function solve() {
    let expression = document.getElementById('expressionOutput')
    let resultBox = document.getElementById('resultOutput')

    document.querySelector('.clear').addEventListener('click', clear)
    document.querySelector('.keys').addEventListener('click', symbolClicked)

    function clear() {
        expression.textContent = ''
        resultBox.textContent = ''
    }

    function symbolClicked(event) {
        let buttonPressed = event.target.value

        switch (buttonPressed) {
            case '/':
            case '*':
            case '+':
            case '-':
                expression.textContent += ` ${buttonPressed} `
                break;
            case '=':
                let [firstNum, operand, secondNum] = expression.textContent.split(' ')
                let result = 0

                if (!secondNum || !operand) {
                    resultBox.textContent = 'NaN'
                    break;
                }

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

                resultBox.textContent = result
                break;
            default:
                expression.textContent += buttonPressed
                break;
        }
    }
}