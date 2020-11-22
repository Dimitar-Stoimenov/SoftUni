function solve(input) {
    let highestCounter = 1
    let topNumber = 0
    let lastElement
    let counter = 1

    for (let element of input) {

        if (element === lastElement) {
            counter++
        } else {
            counter = 1
        }

        if (counter > highestCounter) {
            highestCounter = counter
            topNumber = lastElement
        }

        lastElement = element
    }

    let output = ''

    for (let i = 0; i < highestCounter; i++) {
        output += topNumber + ' '
        
    }

    console.log(output)
}

solve([1, 1, 1, 2, 3, 1, 3, 3])