function solve(input) {
    let bottles = {}
    let obj = {}

    input.forEach(line => {
        let [name, quantity] = line.split(' => ')

        if (!obj[name]) {
            obj[name] = Number(quantity)
        } else {
            obj[name] += Number(quantity)
        }

        if (obj[name] > 1000) {
            if (!bottles[name]) {
                bottles[name] = Math.floor(obj[name] / 1000)
                obj[name] = obj[name] % 1000
            } else {
                bottles[name] += Math.floor(obj[name] / 1000)
                obj[name] = obj[name] % 1000
            }
        }
    })

    Object.entries(bottles).forEach(kvp => {
        console.log(`${kvp[0]} => ${kvp[1]}`);
    })
}

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
)