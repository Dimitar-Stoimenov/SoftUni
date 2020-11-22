function solve(input) {
    // условието е сгрешено - трябва да се запази реда на вкарването.

    let garage = {}

    input.forEach(car => {
        let [garageNr, params] = car.split(' - ')
        let paramsArr = params.split(', ')

        let carObj = {}

        paramsArr.forEach(param => {
            let [key, value] = param.split(': ')
            carObj[key] = value
        })

        if (!garage[garageNr]) {
            garage[garageNr] = []
            garage[garageNr].push(carObj)
        } else {
            garage[garageNr].push(carObj)
        }
    })

    let sortedByGarageNr = Object.entries(garage).sort((a, b) => a[0] - b[0])
    sortedByGarageNr.forEach(line => {

        console.log(`Garage № ${line[0]}`)

        line[1].forEach(param => {
            let outputArr = []

            Object.entries(param).forEach(x => {
                let [key, value] = x
                outputArr.push(`${key} - ${value}`)
            })

            console.log(`--- ${outputArr.join(', ')}`)
        })
    })
}

solve(
    ['1 - color: blue, fuel type: diesel', '3 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)