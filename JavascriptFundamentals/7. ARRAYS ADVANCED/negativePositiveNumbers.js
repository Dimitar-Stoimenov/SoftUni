function solve(numbersArray) {
    let resultArray = []

    while (numbersArray.length > 0) {
        let currentNumber = numbersArray.shift()

        if (currentNumber >= 0) {
            resultArray.push(currentNumber)
        } else {
            resultArray.unshift(currentNumber)
        }
    }

    for (let element of resultArray) {
        console.log((element))        
    }
}

solve([7, -2, 8, 9])