function solve(numbersArray) {
    let oddNumbers = []

    for (let i = 0; i < numbersArray.length; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(numbersArray[i])
        }
    }
    
    let doubledNumbers = oddNumbers.map(n => n * 2)

    let reversedNumbers = doubledNumbers.reverse()

    console.log(reversedNumbers.join(' '));   
}

solve([3, 0, 10, 4, 7, 3])