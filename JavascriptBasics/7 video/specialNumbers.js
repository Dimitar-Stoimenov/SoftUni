function solve(input) {
    let special = +input[0]
    let output = ''

    for (let i = 1111; i <= 9999; i++) {
        i = i.toString()
        let counter = 0
        let a = +i[0]
        let b = +i[1]
        let c = +i[2]
        let d = +i[3]

        if (special % a === 0) {
            counter++
        }
        if (special % b === 0) {
            counter++
        }
        if (special % c === 0) {
            counter++
        }

        if (special % d === 0) {
            counter++
        }

        if (counter === 4) {
            output += i + " "
        }
    }
    console.log(output)
}

solve(['21'])