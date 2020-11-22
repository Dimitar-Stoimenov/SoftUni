function solve(length, numbers) {
    let resultArray = []
    let j = 0

    for (let i = length - 1; i >= 0; i--) {
        resultArray[j++] = numbers[i]
    }

    console.log(resultArray)
}

solve(3, [5, 6, 7, 8])