function solve(a, b, c) {
    let liters = Number(a)
    let fuelFirst = Number(b)
    let laps = Number(c)

    let outRound = 0

    // if (fuelFirst < 5){
    //     fuelFirst = 5
    // }

    for (let index = 1; index <= laps; index++) {
        liters -= fuelFirst
        fuelFirst -= 0.1

        if (liters <= 0) {
            break
        }
        outRound++
    }
    if (liters <= 0) {
        console.log(`You are out of fuel in round ${outRound}!`)
    } else {
        console.log(`Congrats! You won the race!`)
    }
}
solve("50", "4.3", "30")