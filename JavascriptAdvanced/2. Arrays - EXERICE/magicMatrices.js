function solve(input) {
    let magicNum = input[0].reduce((acc, x) => acc += x)
    let magicMark = true

    for (let row of input) {
        let rowNum = row.reduce((acc, x) => acc += x)

        if (rowNum !== magicNum) {
            magicMark = false
            break
        }
    }

    for (let col = 0; col < input[0].length; col++) {
        let colNum = 0

        for (let row = 0; row < input.length; row++) {
            colNum += input[row][col]
        }

        if (colNum !== magicNum) {
            magicMark = false
            break
        }
    }

    console.log(magicMark)
}

solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)