function solve(input) {
    let days = +input[0]
    let i = 1
    let inputLine = input[i++]
    let totalWins = 0
    let totalLoses = 0
    let sum = 0

    for (let day = 1; day <= days; day++) {
        let wins = 0
        let loses = 0
        let daySum = 0

        while (inputLine !== 'Finish') {
            let sport = inputLine
            let result = input[i++]

            if (result === 'win') {
                wins++
            } else {
                loses++
            }

            inputLine = input[i++]
        }

        daySum = wins * 20

        if (wins > loses) {
            daySum *= 1.1
        }

        totalWins += wins
        totalLoses += loses
        sum += daySum
        inputLine = input[i++]
    }

    if (totalWins > totalLoses) {
        sum *= 1.2
        console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`)
    }
}

solve(['2', 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish',])