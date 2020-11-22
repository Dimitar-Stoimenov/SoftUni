let numbers = [2, 8, 7, 3, 10]

function isOdd(number) {
    return number % 2 != 0
}

let oddNumbers = numbers.filter(isOdd)

console.log(numbers)
console.log(oddNumbers)
