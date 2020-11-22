function solve(input) {
    let resultEven = 0
    for (let element of input) {
        if (Number(element) % 2 === 0) {
            resultEven += Number(element)
        }
    }
    
    console.log(resultEven)
}

solve([1, 2, 3, 4, 5, 6])