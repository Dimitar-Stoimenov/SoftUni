function solve(input) {
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g

    let validLocations = input.match(pattern)

    let travelPoints = 0
    let trimmedLocations = []

    if (validLocations) {
        for (let location of validLocations) {
            location = location.substring(1, location.length - 1)
            trimmedLocations.push(location)
            travelPoints += location.length
        }
    }

    console.log(`Destinations: ${trimmedLocations.join(', ')}`)
    console.log(`Travel Points: ${travelPoints}`)
}

solve(
    'ThisIs some InvalidInput'
)