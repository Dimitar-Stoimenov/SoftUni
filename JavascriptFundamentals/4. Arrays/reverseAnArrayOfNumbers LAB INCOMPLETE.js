function solve(length, numbers) {
    let resultArray = []
    let reversedArray = []

    for (let i = 0; i < length; i++) {
        resultArray[i] = numbers[i]
    }

    for (let i = 0; i < resultArray.length; i++) {
        reversedArray[length - 1 - i] = resultArray[i]
    }

    console.log(reversedArray)
}

solve(3, [5, 6, 7, 8])