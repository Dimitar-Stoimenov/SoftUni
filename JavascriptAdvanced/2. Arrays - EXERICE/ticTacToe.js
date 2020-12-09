function solve(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]]
    let currentPlayer = 'X'
    let winnerMark = false
    let movesCount = 0

    for (let line of input) {
        if (movesCount >= 9) {
            break
        }

        let rowPlayed = Number(line[0])
        let colPlayed = Number(line[2])

        if (dashboard[rowPlayed][colPlayed] !== false) {
            console.log("This place is already taken. Please choose another!")
            continue
        } else {
            dashboard[rowPlayed][colPlayed] = currentPlayer
        }

        for (let row = 0; row < 3; row++) {
            if (dashboard[row][0] === currentPlayer && dashboard[row][1] === currentPlayer && dashboard[row][2] === currentPlayer) {
                winnerMark = true
                break
            }
        }

        for (let col = 0; col < 3; col++) {
            if (dashboard[0][col] === currentPlayer && dashboard[1][col] === currentPlayer && dashboard[2][col] === currentPlayer) {
                winnerMark = true
                break
            }
        }

        if (dashboard[0][0] === currentPlayer && dashboard[1][1] === currentPlayer && dashboard[2][2] === currentPlayer) {
            winnerMark = true
        } else if (dashboard[0][2] === currentPlayer && dashboard[1][1] === currentPlayer && dashboard[2][0] === currentPlayer) {
            winnerMark = true
        }

        if (winnerMark) {
            break
        }

        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

        movesCount++
    }

    if (!winnerMark) {
        console.log(`The game ended! Nobody wins :(`)
    } else {
        console.log(`Player ${currentPlayer} wins!`)
    }

    for (let line of dashboard) {
        console.log(line.join('\t'))
    }
}

solve(
    ["0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"]
)