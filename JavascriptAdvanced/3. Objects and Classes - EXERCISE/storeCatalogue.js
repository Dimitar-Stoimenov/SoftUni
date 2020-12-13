function solve(input) {
    let obj = {}

    input.forEach(line => {
        let [name, price] = line.split(' : ')

        obj[name] = Number(price)
    })

    let sortedArr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    let currentLetter = sortedArr[0][0][0]
    console.log(currentLetter);

    for (let kvp of sortedArr) {
        let product = kvp[0]
        let price = kvp[1]

        if (!(kvp[0][0] === currentLetter)) {
            currentLetter = kvp[0][0]
            console.log(currentLetter)
        }

        console.log(`  ${product}: ${price}`);
    }
}

solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
)