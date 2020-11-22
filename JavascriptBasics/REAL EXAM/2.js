function solve(processorsToBeMade, employees, workingDays) {
    let workingHours = 8
    let hoursPerProcessor = 3
    let pricePerProcessor = 110.1

    let hoursDone = workingDays * workingHours * employees
    let processorsMade = Math.floor(hoursDone / hoursPerProcessor)

    let result = Math.abs(pricePerProcessor * (processorsMade - processorsToBeMade))

    if (processorsMade >= processorsToBeMade) {
        console.log(`Profit: -> ${result.toFixed(2)} BGN`)        
    } else {
        console.log(`Losses: -> ${result.toFixed(2)} BGN`)     
    }
}

solve(
    500,
8,
20
)