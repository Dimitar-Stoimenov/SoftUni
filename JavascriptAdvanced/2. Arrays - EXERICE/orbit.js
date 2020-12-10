function solve(input) {
    let [rows, cols, startRow, startCol] = input.map(Number)

    let matrix = []

    for (let i = 0; i < rows; i++) {
        matrix.push([])
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    })
}

solve(
    [4, 4, 0, 1]
)