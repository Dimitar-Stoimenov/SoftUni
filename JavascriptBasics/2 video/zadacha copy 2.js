function solve(input){    
let name = input.shift()
let age = Number(input.shift())
let output = (`Hello, My name is ${name} and i am ${age} years old!`)

console.log(output)
}

solve( [ 'Pesho', '19' ] )