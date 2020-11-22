function solve(a, b, c) {
    let budget = Number(a)
    let statists = Number(b)
    let pricePerStatist = Number(c)

    let decorPrice = budget * 0.1
    if (statists > 150) {
        pricePerStatist = pricePerStatist * 0.9
    } else {
        pricePerStatist = pricePerStatist
    }

    let totalCost = (statists*pricePerStatist) + decorPrice

    if (budget < totalCost) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`)
    } else if (budget >= totalCost) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`)
    } else {
        console.log('FAIL')
    }
    
}

solve("20000", "120", "55.5")
