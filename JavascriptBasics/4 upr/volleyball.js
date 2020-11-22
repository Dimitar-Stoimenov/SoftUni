function solve(a, b, c) {
    let year = a
    let holidays = Number(b)
    let weekendsHome = Number(c)

    let totalWeekends = 48
    let nonWorkWeekends = (totalWeekends - weekendsHome) * .75
    let playableHolidays = holidays * 2 / 3

    let yearMultiplier = 1

    if (year === "leap") {
        yearMultiplier = 1.15
    } else {
        yearMultiplier = 1
    }

    let result = (nonWorkWeekends + playableHolidays + weekendsHome) * yearMultiplier
    console.log(Math.floor(result))
}

solve("leap", "0", "1")