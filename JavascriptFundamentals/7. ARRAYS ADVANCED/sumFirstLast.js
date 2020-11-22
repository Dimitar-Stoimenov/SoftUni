function solve(array) {
    let firstNumber = Number(array.shift())
    let lastNumber = Number(array.pop())
    let result = firstNumber + lastNumber
    console.log(result)       
}

solve(['20', '30', '40'])