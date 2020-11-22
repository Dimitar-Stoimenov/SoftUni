function solve(input) {
    let vacationPrice = Number(input[0])
    let money = Number(input[1])
    let days = 0
    let action
    index = 2
    let counterFive = 0

    while (index < input.length) {
        action = input[index++]

        if (action === 'spend') {
            money -= +input[index++]

            if (money < 0) {
                money = 0
            }
            counterFive++
        } else {
            money += +input[index++]
            counterFive = 0
        }

        days++

        if (counterFive === 5) {
            console.log(`You can't save the money.`)
            console.log(days)
            break
        }
        if (money >= vacationPrice) {
            console.log(`You saved the money for ${days} days.`)
            break
        }
    }
}

solve(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])