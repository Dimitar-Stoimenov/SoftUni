function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0
    let shieldBreakCount = 0
    for (let i = 1; i <= lostFightsCount; i++) {
        let helmetBreak = false
        let swordBreak = false

        if (i % 2 === 0) {
            helmetBreak = true
            expenses += helmetPrice
        }
        if (i % 3 === 0) {
            swordBreak = true
            expenses += swordPrice
        }
        if (helmetBreak && swordBreak) {
            expenses += shieldPrice
            shieldBreakCount++
        }
        if (shieldBreakCount === 2) {
            expenses += armorPrice
            shieldBreakCount = 0
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiator(23,
    12.50,
    21.50,
    40,
    200
)