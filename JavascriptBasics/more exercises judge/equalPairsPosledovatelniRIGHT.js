function solve(input) {
    let n = input[0]
 
    let a = 0
    let b = 0
    let value = 0
    let difference = 0
    let counterDiff = 0
 
    for (let i = 1; i < input.length; i += 2) {
        a = Number(input[i])
        b = Number(input[i + 1])
        if (i > 2) {
            if (!((a + b) === value)) {
                difference = Math.abs(value - (a + b))
                counterDiff++
            }
        }
        value = a + b
    }
 
    if (counterDiff == 0) {
        console.log(`Yes, value=${value}`)
    } else {
        console.log(`No, maxdiff=${difference}`)
    }
}
 
solve(['3', '1', '2', '0', '3', '4', '-1'])