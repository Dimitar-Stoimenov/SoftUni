function solve(numbers, commands) {
    let numberOfElements = commands[0]
    let numberOfElementsToDelete = commands[1]
    let numberBeingSearched = commands[2]

    let takenNumbers = numbers.slice(0, numberOfElements)

    takenNumbers.splice(0, numberOfElementsToDelete)

    let filteredNumbers = takenNumbers.filter(n => n == numberBeingSearched)

    console.log(`Number ${numberBeingSearched} occurs ${filteredNumbers.length} times.`)  
}

solve(
    [5, 3, 3, 4, 3, 6],
    [5, 2, 3]
)