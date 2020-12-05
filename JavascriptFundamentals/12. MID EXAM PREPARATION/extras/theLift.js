function solve(input) {
    let wagons = input[1].split(' ').map(Number)
    let queue = Number(input[0])
    let wagonFullMark = false
    let maxPassengers = wagons.length * 4

    while (!wagonFullMark && queue > 0) {
        for (let index in wagons) {
            if (wagons[index] < 4) {
                wagons[index]++
                break
            }
        }

        let totalPassengers = 0

        for (const element of wagons) {
            totalPassengers += element
        }

        if (totalPassengers >= maxPassengers) {
            wagonFullMark = true
            queue--
            break
        }

        queue--
    }

    if (queue <= 0 && wagonFullMark) {
        console.log(wagons.join(' '))
    } else if (queue <= 0) {
        console.log(`The lift has empty spots!`)
        console.log(wagons.join(' '))
    } else {
        console.log(`There isn't enough space! ${queue} people in a queue!`)
        console.log(wagons.join(' '))
    }
}

solve(
    [
        "7",
        "4 0 0 4"
    ]
)