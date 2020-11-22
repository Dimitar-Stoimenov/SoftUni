function solve(input) {
    let [n, m, s] = input.map(Number)
    let outputArray = []

    for (let index = m; index >= n; index--) {

        if (index === s && (index % 2 === 0 && index % 3 === 0)) {
            break
        }

        if (index % 2 === 0 && index % 3 === 0) {
            outputArray.push(index)
        }
    }

    console.log(outputArray.join(' '))
}

solve(
    ['1', '30', '15']
)