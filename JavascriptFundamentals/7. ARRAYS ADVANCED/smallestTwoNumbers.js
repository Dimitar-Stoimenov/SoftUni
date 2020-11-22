function solve(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b)
    console.log(sortedNumbers[0] + ' ' + sortedNumbers[1]);    
}

solve([30, 15, 50, 5])