function solve(numbers) {
    let resultEven = 0
    let resultOdd = 0

    for (let number of numbers) {
        if (Number(number) % 2 === 0) {
            resultEven += Number(number)
        } else {
            resultOdd += Number(number)
        }
    }

    console.log(resultEven - resultOdd)
}

solve([1, 2, 3, 4, 5, 6, 7, 8])