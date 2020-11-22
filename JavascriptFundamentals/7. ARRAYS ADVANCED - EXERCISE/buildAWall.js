function solve(heightArray) {
    let sum = 0
    let concreteCubicYardsPerFoot = 195
    let pricePerOneCubicYard = 1900
    let dailyUsage = []

    while (heightArray.length > 0) {

        heightArray = heightArray.filter(x => !(x >= 30))
        heightArray = heightArray.map(x => (x + 1))

        let dailyConcreteUsed = heightArray.length * concreteCubicYardsPerFoot
        dailyUsage.push(dailyConcreteUsed)

        for (let index = 0; index < heightArray.length; index++) {
            if (heightArray[index] >= 30) {
                heightArray.splice(index, 1)
                index--
            }            
        }
    }

    console.log(dailyUsage.join(', '))

    for (const element of dailyUsage) {
        sum += element * pricePerOneCubicYard
    }

    console.log(sum + " pesos")
}

solve([17,
    22,
    17,
    19,
    17])