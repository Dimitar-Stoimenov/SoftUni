function solve(input) {
    let n = Number(input[0])
    let output = ""

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            for (let k = 1; k < 9; k++) {
                for (let m = 1; m < 9; m++) {

                    if (n % i === 0 && n % j === 0 && n % k === 0 && n % m === 0) {
                        output += `${i}${j}${k}${m} `
                    }
                }
            }
        }
    }
    console.log(output)
}

solve(['3'])