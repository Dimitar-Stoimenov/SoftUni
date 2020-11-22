function solve(input) {
    let width = input[0]
    let length = input[1]
    let height = input[2]
    let index = 3
    let cartons = input[index++]
    let totalCartonSpace = 0
    let totalSpaceCbm = Number(width * length * height)

    while (true) {

        if (cartons === 'Done') {
            console.log(`${(totalSpaceCbm - totalCartonSpace)} Cubic meters left.`)
            break
        }

        let cubicMeterCartons = Number(cartons)
        totalCartonSpace += cubicMeterCartons

        if (totalCartonSpace > totalSpaceCbm) {
            console.log(`No more free space! You need ${(totalCartonSpace - totalSpaceCbm)} Cubic meters more.`)
            break
        }

        cartons = input[index++]
    }
}

solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
