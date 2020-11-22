function solution(input) {
    let properPositiveDivisorsArray = getProperDivisorsArray(input)
    let sumOfDivisors = sumDivisors(properPositiveDivisorsArray)
    let isPerfect = perfectNumberCheck(input, sumOfDivisors)

    if (isPerfect) {
        console.log(`We have a perfect number!`);        
    } else {
        console.log(`It's not so perfect.`);        
    }


    function getProperDivisorsArray(number) {
        let properPositiveDivisorsArray = []

        for (let i = 1; i < number; i++) {
            let dividedNumber = number / i
            if (dividedNumber % 1 === 0) {
                properPositiveDivisorsArray.push(i)
            }
        }

        return properPositiveDivisorsArray
    }

    function sumDivisors(array) {
        let sum = 0

        for (let element of array) {
            sum += element
        }

        return sum
    }

    function perfectNumberCheck(number, sum) {
        return (number === sum)
    }
}

solution(28)