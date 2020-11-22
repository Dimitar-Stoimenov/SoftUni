function solve(inputArray) {
    let copiedArray = inputArray.slice()
    let sortedArray = copiedArray.sort((a, b) => a - b)

    let higherArrayReversed = sortedArray
        .splice(Math.floor(sortedArray.length / 2))
        .reverse()

    let lowerArray = sortedArray

    let resultArray = []

    for (let i = 0; i < higherArrayReversed.length; i++) {
        resultArray.push(higherArrayReversed[i])

        if (i < lowerArray.length) {
            resultArray.push(lowerArray[i])   
        }              
    }

    console.log(resultArray.join(' '))    
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])