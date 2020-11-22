function solve(input) {
    let start = +input[0]
    let end = +input[1]
    let magicNum = +input[2]
    let combinations = 0
    let isMagic = false

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let result = i + j
            combinations++
            if (result === magicNum) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${(i + j)})`)
                isMagic = true
                break
            }
        }

        if (isMagic) {
            break
        }
    }

    if (!isMagic) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`)
    }
}

solve(["54",
    "511",
    "112"])


