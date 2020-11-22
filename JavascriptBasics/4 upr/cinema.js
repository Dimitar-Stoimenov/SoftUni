function solve(a, b, c) {
    let type = a
    let rows = Number(b)
    let columns = Number(c)

    let profit = 0

    switch (type) {
        case 'Premiere':
            profit = rows * columns * 12
            break;
        case 'Normal':
            profit = rows * columns * 7.5
            break;
        case 'Discount':
            profit = rows * columns * 5
            break;
    }
    console.log(`${(profit).toFixed(2)} leva`)
}

solve("Premiere", "10", "12")
