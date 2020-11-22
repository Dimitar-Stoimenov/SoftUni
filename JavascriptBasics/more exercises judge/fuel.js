function solve(a, b) {
    let fuelType = String(a)
    let litres = Number(b)

    if (litres >= 25) {
        if (fuelType === "Diesel") {
            console.log(`You have enough diesel.`)
        } else if (fuelType === "Gasoline") {
            console.log(`You have enough gasoline.`)
        } else if (fuelType === "Gas") {
            console.log(`You have enough gas.`)
        } else {
            console.log(`Invalid fuel!`)
        }
        
    } else {
        if (fuelType === "Diesel") {
            console.log(`Fill your tank with diesel!`)
        } else if (fuelType === "Gasoline") {
            console.log(`Fill your tank with gasoline!`)
        } else if (fuelType === "Gas") {
            console.log(`Fill your tank with gas!`)
        } else {
            console.log(`Invalid fuel!`)
        }
    }
}

solve('Diesel', 10)