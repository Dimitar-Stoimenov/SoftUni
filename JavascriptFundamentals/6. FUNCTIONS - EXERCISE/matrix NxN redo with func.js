function solution(inputNumber, char) {
    for (let i = 0; i < inputNumber; i++) {
        console.log(row(inputNumber, char))
    }

    function row(number, operatorChar) {
        let output = ''

        for (let j = 0; j < number; j++) {
            if (number - 1 === j) {
                output += number
            } else {
                output += number + operatorChar
            }
        }

        return output
    }
}

solution(7, '+')