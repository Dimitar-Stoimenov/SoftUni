function solve(input) {
    let arrayOfHoods = input.shift().split(', ')
    let neighbourhoods = {}

    arrayOfHoods.forEach(name => neighbourhoods[name] = [])


    for (let kvp of input) {
        let [neighbourhoodName, personName] = kvp.split(' - ')

        if (arrayOfHoods.includes(neighbourhoodName)) {
            neighbourhoods[neighbourhoodName].push(personName)
        }
    }

    let sortedHoodArray = Object.entries(neighbourhoods)
        .sort((a, b) => {
            let populationA = a[1].length
            let populationB = b[1].length

            return populationB - populationA
        })

    sortedHoodArray.forEach(line => {
        console.log(`${line[0]}: ${line[1].length}`)
        for (let name of line[1]) {
            console.log(`--${name}`)
        }
    })
}

solve(
    ['Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy']

)