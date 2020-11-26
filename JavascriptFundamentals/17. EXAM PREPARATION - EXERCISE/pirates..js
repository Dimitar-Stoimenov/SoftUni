function solve(input) {
    let sailMark = false
    let cities = {}

    for (let line of input) {
        if (line === 'End') {
            let sortedCities = Object.entries(cities)

            if (sortedCities.length < 1) {
                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
            } else {
                sortedCities.sort((a, b) => {
                    if (a[1].gold === b[1].gold) {
                        return a[0].localeCompare(b[0])
                    } else {
                        return b[1].gold - a[1].gold
                    }
                })

                console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`)

                for (let city of sortedCities) {
                    console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`)
                }
            }

            break
        } else if (line === 'Sail') {
            sailMark = true
        } else if (!sailMark) {
            let [city, population, gold] = line.split('||')

            if (cities[city]) {
                cities[city].population += Number(population)
                cities[city].gold += Number(gold)
            } else {
                cities[city] = { population: Number(population), gold: Number(gold) }
            }
        } else {
            let [command, town, secondArg, thirdArg] = line.split('=>')

            switch (command) {
                case 'Plunder':
                    let killedPeople = Number(secondArg)
                    let goldStolen = Number(thirdArg)

                    cities[town].population -= killedPeople
                    cities[town].gold -= goldStolen

                    console.log(`${town} plundered! ${goldStolen} gold stolen, ${killedPeople} citizens killed.`)

                    if (cities[town].population === 0 || cities[town].gold === 0) {
                        console.log(`${town} has been wiped off the map!`)
                        delete cities[town]
                    }

                    break;
                case 'Prosper':
                    let gold = Number(secondArg)

                    if (gold < 0) {
                        console.log(`Gold added cannot be a negative number!`)
                        break
                    } else {
                        cities[town].gold += gold
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
                    }

                    break;
            }
        }
    }
}

solve(
    [
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End'
    ]
)