function solve(inputArray) {
    let field = inputArray[0]
    let initialPosition = []
    initialPosition.length = field

    for (let m = 0; m < initialPosition.length; m++) {
        initialPosition[m] = 0
    }

    let ladybugIndex = []
    ladybugIndex = inputArray[1].split(' ')

    for (let k = 0; k < ladybugIndex.length; k++) {
        let g = ladybugIndex[k]
        initialPosition[g] = 1
        initialPosition.length = field
    }

    for (let i = 2; i < inputArray.length; i++) {
        let movementArray = inputArray[i].split(' ')
        let bugPositionIndex = Number(movementArray[0])
        let text = movementArray[1]
        let flight = Number(movementArray[2])
        if (initialPosition[bugPositionIndex] == 0 || bugPositionIndex < 0 || bugPositionIndex >= initialPosition.length) {

        } else {

            if (text === 'right') {
                let destinationIndex = bugPositionIndex + flight

                if (initialPosition[destinationIndex] == 0) {
                    initialPosition[destinationIndex] = '1'
                    initialPosition[bugPositionIndex] = '0'
                } else if (initialPosition[destinationIndex] == 1) {

                    let newIndex = destinationIndex + flight

                    while (initialPosition[newIndex] == 1) {
                        newIndex += flight
                    }

                    initialPosition[newIndex] = '1'
                    initialPosition[bugPositionIndex] = '0'
                    initialPosition.length = field

                } else {
                    initialPosition[bugPositionIndex] = '0'
                }

            } else {

                let destinationIndex = bugPositionIndex - flight

                if (initialPosition[destinationIndex] == 0) {
                    initialPosition[destinationIndex] = '1'
                    initialPosition[bugPositionIndex] = '0'
                } else if (initialPosition[destinationIndex] == 1) {

                    let newIndex = destinationIndex - flight

                    while (initialPosition[newIndex] == 1) {
                        newIndex -= flight
                    }

                    initialPosition[newIndex] = '1'
                    initialPosition[bugPositionIndex] = '0'
                    initialPosition.length = field

                } else {
                    initialPosition[bugPositionIndex] = '0'
                }
            }
        }
    }

    console.log(initialPosition.join(' '))
}

solve(
    [788, '0 1 2 3 4 5',
        '1 right 1',
        '2 left -1',
        '3 right 1',
        '3 left -1',
        '4 right 1',
        '5 left -1',
        '7 right 1',
        '2 left -1']
)