function solve(chislo) {
    chislo = Number(chislo)
    let bonus = 0.0
    let even = Boolean
    let five = Boolean
    if (chislo <= 100) {
        bonus = 5
    } else if (chislo > 100 && chislo <= 1000) {
        bonus = chislo * 0.2
    } else {
        bonus = chislo * 0.1
    }

    let evenCheck = Number(chislo % 2)
    if (evenCheck === 0) {
        even = true
    } else {
        even = false
    }

    if (even = true) {
        bonus = bonus + 1
    } else {
        bonus = bonus
    }
    let minusFive = (chislo - 5)
    let fiveCheck = (minusFive % 10)
    if (fiveCheck === 0) {
        five = true
    } else {
        five = false
    }

    if (five = true) {
        bonus = bonus + 5
    } else {
        bonus = bonus
    }

    console.log(bonus)
    console.log(chislo + bonus)
}

solve("20")