function solve(matrix) {
    let bombCoords = matrix.splice(matrix.length - 1)
    bombCoords = bombCoords[0].split(' ')

    let killCount = 0
    let totalDamage = 0

    for (const i in matrix) {
        matrix[i] = matrix[i].split(' ').map(Number)
    }

    for (const k of bombCoords) {
        let [bombRow, bombCol] = (k.split(',')).map(Number)
        let bombValue = matrix[bombRow][bombCol]

        if (bombValue <= 0) {
            continue
        }

        let startRow = Math.max(0, bombRow - 1)
        let endRow = Math.min(bombRow + 1, matrix.length - 1)

        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1)
            let endCol = Math.min(bombCol + 1, matrix[row].length - 1)

            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue
            }
        }

        killCount++
        totalDamage += bombValue
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] > 0) {
                totalDamage += matrix[row][col]
                killCount++
            }
        }
    }

    console.log(totalDamage)
    console.log(killCount)
}

solve(
    ['10 0 0 0 0 0 0 0 0 0 0 0 0',
        '10 10 10 0 0 0 0 0 0 15 0 0 0',
        '0 10 10 10 0 0 0 0 0 10 0 0 0',
        '0 0 10 10 0 0 0 0 0 0 0 0 0',
        '3,3 1,10']
)