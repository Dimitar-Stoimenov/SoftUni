function solve(input) {
    let objArray = []

    input.forEach(element => {
        let [name, price] = element.split(' : ')
        price = Number(price)
        let tempObj = { [name]: price }
        objArray.push(tempObj)
    })

    objArray.sort(function (a, b) {
        return (Object.keys(a)[0]).localeCompare(Object.keys(b)[0])
    })

    let previousLetter = ''

    objArray.forEach(obj => {
        let letter = Object.keys(obj)[0][0]
        let name = Object.keys(obj)[0]
        let price = Object.values(obj)[0]

        if (letter !== previousLetter) {
            console.log(letter)
            console.log('  ' + name + ': ' + price)
        } else {
            console.log('  ' + name + ': ' + price)
        }

        previousLetter = letter
    })
}

solve(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)