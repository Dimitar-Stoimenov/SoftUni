function solve(input) {
    let neighbourhood = input.shift().split('@').map(Number)

    let currentHouseIndex = 0
    let houses = neighbourhood.length - 1

    for (let line of input) {
        if (line === 'Love!') {
            break
        }

        let [blank, jumpLength] = line.split(' ')
        jumpLength = Number(jumpLength)
        currentHouseIndex += jumpLength

        if (currentHouseIndex > houses) {
            currentHouseIndex = 0
        }

        neighbourhood[currentHouseIndex] -= 2

        if (neighbourhood[currentHouseIndex] === 0) {
            console.log(`Place ${currentHouseIndex} has Valentine's day.`)
        } else if (neighbourhood[currentHouseIndex] < 0) {
            console.log(`Place ${currentHouseIndex} already had Valentine's day.`)
        }
    }

    console.log(`Cupid's last position was ${currentHouseIndex}.`)

    let counter = 0

    for (let house of neighbourhood) {
        if (house > 0) {
            counter++
        }
    }

    if (counter === 0) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${counter} places.`)
    }
}

solve(
    [
        '2@4@2', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]
)