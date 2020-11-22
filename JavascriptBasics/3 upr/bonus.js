function solve(chislo) {
    chislo=Number(chislo)
    let bonus = 0.0
    let score = chislo


    if (score <= 100) {
        bonus = 5
    } else if (score > 100 && score <= 1000) {
        bonus = score * 0.2
    } else {
        bonus = score * 0.1
    }
    
    if (score % 2 === 0) {
        bonus = bonus + 1
    } else if (score % 10 === 5) {
        bonus = bonus + 2
    } else {
        bonus = bonus
    }
    console.log(bonus)
    console.log(score + bonus)
}

solve("15875")