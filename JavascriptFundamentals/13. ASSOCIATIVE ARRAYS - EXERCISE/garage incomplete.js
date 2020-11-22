function solve(input) {

    let garage = []

    input.forEach(car => {

        let [garageNr, parameters] = car.split(' - ')
        let paramArr = parameters.split(', ')
        let carArr = []

        for (let element of paramArr) {
            if (!garage[garageNr]) {
                garage[garageNr] = []
            }

            let [key, value] = element.split(': ')
            carArr[key] = value
        }

        garage[garageNr].push(carArr)
    }
    )

    debugger
}


solve(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)