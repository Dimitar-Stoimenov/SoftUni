function solve(input) {
    let obj = {}

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i]
        let amount = Number(input[i + 1])

        if (!obj[resource]) {
            obj[resource] = amount
        } else {
            obj[resource] += amount
        }
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`)        
    }
}

solve(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
)