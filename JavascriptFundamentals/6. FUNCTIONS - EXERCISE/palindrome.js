function solution(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i] === reverseNumber(numberArray[i]))
    }

    function reverseNumber(number) {
        number = String(number)
        let reversedNumber = ''

        for (let i = number.length - 1; i >= 0; i--) {
            reversedNumber += number[i]
        }

        reversedNumber = Number(reversedNumber)
        return reversedNumber
    }
}

solution([123, 323, 421, 121])