function solve(input) {

    let parkingLot = {}

    input.forEach(command => {
        let [direction, carNumber] = command.split(', ')
        if (direction === 'IN' && !parkingLot[carNumber]) {
            parkingLot[carNumber] = 1
        } else if (direction === 'OUT' && parkingLot[carNumber]) {
            parkingLot[carNumber] = 0
        }
    })

    let filteredParkingLot = Object.entries(parkingLot)
        .filter(x => x[1] !== 0)

    if (filteredParkingLot.length <= 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        filteredParkingLot
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(x => console.log(x[0]))
    }
}

solve(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)