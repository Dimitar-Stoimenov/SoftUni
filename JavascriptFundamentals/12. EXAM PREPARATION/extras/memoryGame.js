function solve(input) {
    let moveCount = 0
    let sequence = input.shift().split(' ')

    for (let element of input) {
        if (element === 'end') {
            console.log("Sorry you lose :(")
            console.log(sequence.join(' '))
            break
        }

        moveCount++

        let [firstIndex, secondIndex] = element.split(' ').map(Number)
        let breakMark = false

        if (firstIndex < 0 || firstIndex >= sequence.length || secondIndex < 0 || secondIndex >= sequence.length) {
            breakMark = true
        }

        if (firstIndex === secondIndex || breakMark) {
            console.log("Invalid input! Adding additional elements to the board")
            let sequenceMiddle = sequence.length / 2
            let additionalElement = '-' + moveCount + 'a'
            sequence.splice(sequenceMiddle, 0, additionalElement)
            sequence.splice(sequenceMiddle, 0, additionalElement)
        } else {

            if (sequence[firstIndex] === sequence[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`)
                sequence.splice(Math.max(firstIndex, secondIndex), 1)
                sequence.splice(Math.min(firstIndex, secondIndex), 1)
            } else {
                console.log(`Try again!`)
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moveCount} turns!`)
            break
        }
    }
}

solve(
    [
        "1 1 2 2 3 3 4 4 5 5",
        "1 0",
        "-1 0",
        "1 0",
        "1 0",
        "1 0",
        "end"
    ]
)