function solve(input) {
    let obj = {}

    input.forEach(line => {
        let [country, town, cost] = line.split(' > ')
        cost = Number(cost)

        if (!obj[country]) {
            obj[country] = {}
            obj[country][town] = cost
        } else if (!obj[country][town]) {
            obj[country][town] = cost
        } else {
            if (cost < (obj[country][town])) {
                obj[country][town] = cost
            }
        }
    })

    let sortedCountries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    let countryObj = {}

    sortedCountries.forEach(line => {
        let [country, object] = line

        object = Object.entries(object).sort((a, b) => a[1] - b[1])

        countryObj[country] = object
    })

    for (let country in countryObj) {

        if (countryObj[country].length === 1) {
            let [city, cost] = countryObj[country][0]
            console.log(`${country} -> ${city} -> ${cost}`)

        } else {
            let outputArr = []

            for (const iterator of countryObj[country]) {
                let [city, cost] = iterator
                outputArr.push(`${city} -> ${cost}`)
            }

            let output = outputArr.join(' ')

            console.log(`${country} -> ${output}`)
        }
    }
}

solve(
    [
        "Bulgaria > Sofia > 5000",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
)