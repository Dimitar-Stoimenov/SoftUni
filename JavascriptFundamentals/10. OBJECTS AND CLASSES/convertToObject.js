function solve(input) {
    let person = JSON.parse(input)
    
    let keysArray = Object.keys(person)    
    let valuesArray = Object.values(person)

    for (let i = 0; i < keysArray.length; i++) {
        console.log(`${keysArray[i]}: ${valuesArray[i]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')