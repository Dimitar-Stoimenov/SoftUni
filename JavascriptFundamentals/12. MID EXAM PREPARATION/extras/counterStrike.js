function solve(input) {
    let commandArray = input
    let energy = commandArray.shift()
    let battleCounter = 0

    for (let element of commandArray) {
        if (element == 'End of battle') {
            console.log(`Won battles: ${battleCounter}. Energy left: ${energy}`)
            break
        } else {
            element = Number(element)
        }

        if (energy < element) {
            console.log(`Not enough energy! Game ends with ${battleCounter} won battles and ${energy} energy`)
            break
        } else {
            energy -= element
        }

        battleCounter++

        if (battleCounter % 3 === 0) {
            energy += battleCounter
        }
    }
}

solve(
    [
        '100', '10', '10',
        '10', '1', '2',
        '3', '73', '10'
    ]
)