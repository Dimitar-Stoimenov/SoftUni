function solve(input) {
    let cars = {}

    input.forEach(line => {
        let [name, model, producedCars] = line.split(' | ')

        if (!cars[name]) {
            cars[name] = {}
        }

        if (!cars[name][model]) {
            cars[name][model] = {quantity: Number(producedCars)}
        } else {
            cars[name][model].quantity += Number(producedCars)
        }
    })

    Object.entries(cars).forEach(brand => {
        let brandName = brand[0]
        console.log(brandName);
        Object.entries(brand[1]).forEach(model => {
            let modelName = model[0]
            let quantity = model[1].quantity
            console.log(`###${modelName} -> ${quantity}`);
        })
    })
}

solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
)