function solve(input) {
    let n = Number(input)
    let validCombos = 0
    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                let result = x1 + x2 + x3
                if (result === n) {
                    validCombos++
                    break
                }
            }
        }
    }
    console.log(validCombos)
}

solve(['25'])