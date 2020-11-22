const numbers = [10, 20, 30, 40, 50]

console.log(numbers)

let result = numbers.splice(2, 1, 300)

console.log(`result - ${result}`)
console.log((`original - ${numbers}`))