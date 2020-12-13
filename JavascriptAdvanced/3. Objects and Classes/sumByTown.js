function solve(input) {
    let obj = {}

    for (let i = 0; i < input.length; i += 2) {
        let name = input[i]
        let income = Number(input[i + 1])

        if (!obj[name]) {
            obj[name] = income
        } else {
            obj[name] += income
        }
    }

    console.log(JSON.stringify(obj))
}

solve(
    ['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']
)