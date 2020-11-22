function solve(sequence, bombInfo) {
    let bomb = bombInfo[0]
    let range = bombInfo[1]

    while (sequence.includes(bomb)) {
        let index = sequence.indexOf(bomb)

        let mistakeFix = 0
        if ((index - range) < 0) {
            mistakeFix = index - range
        }

        sequence.splice(Math.max(0, (index - range)), range * 2 + 1 + mistakeFix)
    }

    let result = 0

    for (const element of sequence) {
        result += element
    }

    console.log(result)
}

solve(
    [1, 4, 4, 2, 8, 9, 1],
    [4, 2]
)