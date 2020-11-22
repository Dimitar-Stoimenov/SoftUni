function solve(a, b, c) {
    let age = Number(a)
    let priceWasher = Number(b)
    let pricePerToy = Number(c)
    let countToys = 0
    let money = 0
    let birthdayMoney = 0
    let toysTotalPrice = 0
    let stolenMoney = 0

    for (let odd = 0; odd <= age; odd++) {
        if (odd % 2 == 1) {
            countToys++
        }
    }
    for (let even = 1; even <= age; even++) {
        if (even % 2 == 0) {
            birthdayMoney += 10
            money += birthdayMoney
        }
    }
    for (let even = 1; even <= age; even++) {
        if (even % 2 == 0) {
            stolenMoney += 1
        }
    }

    toysTotalPrice = countToys * pricePerToy
    let totalMoney = toysTotalPrice + money - stolenMoney
    
    if (priceWasher <= totalMoney){
        console.log(`Yes! ${((totalMoney - priceWasher).toFixed(2))}`)
    } else if (totalMoney < priceWasher) {
        console.log(`No! ${((priceWasher - totalMoney).toFixed(2))}`)
    }
}

solve("10", "170", "6")     