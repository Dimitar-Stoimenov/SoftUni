function solve(input) {
    let carsCount = Number(input.shift())
    let cars = {}

    for (let i = 0; i < carsCount; i++) {
        let [car, mileage, fuel] = input.shift().split('|')
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) }
    }

    for (let line of input) {
        if (line === 'Stop') {
            // Upon receiving the "Stop" command you need to print all cars in your possession, sorted by their mileage in decscending order, then by their name in ascending order, in the following format: "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

            let sortedCars = Object.entries(cars).sort((a, b) => {
                if (b[1].mileage - a[1].mileage === 0) {
                    return a[0].localeCompare(b[0])
                } else {
                    return b[1].mileage - a[1].mileage
                }
            })

            for (let carParams of sortedCars) {
                console.log(`${carParams[0]} -> Mileage: ${carParams[1].mileage} kms, Fuel in the tank: ${carParams[1].fuel} lt.`)
            }

            break
        } else {
            let [command, car, secondArg, thirdArg] = line.split(' : ')

            switch (command) {
                case 'Drive':
                    let distance = Number(secondArg)
                    let fuel = Number(thirdArg)

                    if (cars[car].fuel < fuel) {
                        console.log(`Not enough fuel to make that ride`)
                    } else {
                        cars[car].mileage += distance
                        cars[car].fuel -= fuel
                        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)

                        if (cars[car].mileage >= 100000) {
                            console.log(`Time to sell the ${car}!`)
                            delete cars[car]
                        }
                    }
                    break;
                case 'Refuel':
                    let fuelToTake = Number(secondArg)
                    let currentFuel = cars[car].fuel

                    let totalFuel = fuelToTake + currentFuel
                    let refuelAmount = 0

                    if (totalFuel > 75) {
                        refuelAmount = fuelToTake - (totalFuel - 75)
                        cars[car].fuel = 75
                    } else {
                        refuelAmount = fuelToTake
                        cars[car].fuel = totalFuel
                    }

                    console.log(`${car} refueled with ${refuelAmount} liters`)
                    break;
                case 'Revert':
                    let kilometers = Number(secondArg)
                    cars[car].mileage -= kilometers

                    if (cars[car].mileage < 10000) {
                        cars[car].mileage = 10000
                    } else {
                        console.log(`${car} mileage decreased by ${kilometers} kilometers`)
                    }

                    break;
            }
        }
    }
}

solve(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
)