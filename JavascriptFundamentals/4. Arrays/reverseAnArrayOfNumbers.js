function solve(length, numbers) {
    let output = ''
    for (let i = length - 1; i >= 0; i--) {
        output += numbers[i] + ' '     
    }
    console.log(output)
}

solve(3, [5, 6, 7, 8])