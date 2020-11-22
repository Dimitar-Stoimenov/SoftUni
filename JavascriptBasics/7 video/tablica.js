function solve() {
    let x = 0
    let y = 0
    for (x = 1; x < 11; x++) {
        for (y = 1; y < 11; y++) {
            let result = x * y
            console.log(`${x} * ${y} = ${result}`)
        }
    }
}

solve()