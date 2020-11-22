function solve(input) {
    let count = +input[0]
    let index = 1
    let bestScore = 0
    let nameBest = ''

    for (let i = 1; i <= count; i++) {
        let inputLine = input[index++]
        let name = inputLine
        let totalScore = 0

        while (inputLine !== 'Stop') {
            let score = +input[index++]
            totalScore += score
            inputLine = input[index]
        }

        console.log(`${name} has ${totalScore} points.`)

        if (totalScore > bestScore) {
            bestScore = totalScore
            nameBest = name
            console.log(`${name} is the new number 1!`)
        }

        inputLine = input[index++]
    }
    console.log(`${nameBest} won competition with ${bestScore} points!`)
}

solve(['3', 'Chef Manchev',
    '10', '10',
    '10', '10',
    'Stop', 'Natalie',
    '8', '2',
    '9', 'Stop',
    'George', '9',
    '2', '4',
    '2', 'Stop']
)