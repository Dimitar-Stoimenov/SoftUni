function solve(a, b) {
    let startRow = 0
    let endRow = a - 1
    let startCol = 0
    let endCol = b - 1

    let counter = 1

    let matrix = []

    for (let i = 0; i < a; i++) {
        matrix.push([])
    }

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++
        }

        startRow++

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter++
        }

        endCol--

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter++
        }

        endRow--

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = counter++
        }

        startCol++
    }

    matrix.forEach(row => {
        console.log(row.join(' '))
    })
}

solve(5, 5)