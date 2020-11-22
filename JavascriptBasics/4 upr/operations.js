function solve(a, b, c) {
    let N1 = Number(a)
    let N2 = Number(b)
    let symbol = c
    let result = 0

    switch (symbol) {
        case '+':
            result = N1 + N2            
                if (result % 2 === 0) {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - even`)
                } else {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - odd`)
                }
            break;
        case '-':
            result = N1 - N2            
                if (result % 2 === 0) {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - even`)
                } else {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - odd`)
                }
            break;
        case '*':
            result = N1 * N2            
                if (result % 2 === 0) {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - even`)
                } else {
                    console.log(`${N1} ${symbol} ${N2} = ${result} - odd`)
                }
            break;
        case '/':
                result = N1 / N2
                if (N2 === 0) {
                    console.log(`Cannot divide ${N1} by zero`)
                } else {
                    console.log(`${N1} / ${N2} = ${(result).toFixed(2)}`)
                }
            break;
        case '%':
            result = N1 % N2
                if (N2 === 0) {
                    console.log(`Cannot divide ${N1} by zero`)
                } else {
                    console.log(`${N1} % ${N2} = ${result}`)
                }
            break;
    }
}

solve("10", "12", "+")
