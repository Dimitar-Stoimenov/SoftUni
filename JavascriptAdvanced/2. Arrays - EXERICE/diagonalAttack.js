function solve(input) {
    let matrix = []

    for (let line of input) {
        matrix.push(line.split(' ').map(Number))
    }

    let firstDiagonalSum = 0
    let secondDiagonalSum = 0

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i]
    }

    for (let j = matrix.length - 1; j >= 0; j--) {
        secondDiagonalSum += matrix[(matrix.length - 1) - j][j]
    }

    if (firstDiagonalSum === secondDiagonalSum) {
        swapNonDiagonalNumbersAndPrint(matrix, firstDiagonalSum)
    } else {
        printMatrix(matrix)
    }

    function printMatrix(arr) {
        for (let row of arr) {
            console.log(row.join(' '));
        }
    }

    function swapNonDiagonalNumbersAndPrint(arr, num) {
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr.length; col++) {
                if (row === col || (((arr.length - 1) - col) === row)) {
                    // do nothing
                } else {
                    arr[row][col] = num
                }
            }
        }

        printMatrix(arr)
    }
}

solve(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
)